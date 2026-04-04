/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PRODUCTS_CONFIG } from "../../config";
import { AddStockInput } from "../../services/graphql";

export interface IAddStock {
  modalShow: boolean;
  onClose: () => void;
  addStock(args: AddStockInput): Promise<boolean>;
  product: any;
}

export const AddStockModel = ({
  modalShow,
  onClose,
  product,
  addStock,
}: IAddStock) => {
  const theme = useTheme();

  const [quantity, setQuantity] = useState<number>(-1);
  const [buyingPrice, setBuyingPrice] = useState<number>(-1);
  const [projectedPrice, setProjectedPrice] = useState<number>(0);

  useEffect(() => {
    if (modalShow) {
      setQuantity(-1);
      setBuyingPrice(-1);
      setProjectedPrice(Number(product?.price || 0));
    }
  }, [modalShow, product?.id]);

  useEffect(() => {
    const previousQuantity = Number(product?.quantity || 0);
    const previousPrice = Number(product?.price || 0);

    if (quantity > 0 && buyingPrice > 0) {
      const totalQuantity = previousQuantity + quantity;
      const calculatedPrice =
        totalQuantity === 0
          ? 0
          : (previousQuantity * previousPrice + quantity * buyingPrice) /
            totalQuantity;

      setProjectedPrice(Number(calculatedPrice.toFixed(2)));
      return;
    }

    setProjectedPrice(previousPrice);
  }, [buyingPrice, product?.price, product?.quantity, quantity]);

  const _addStock = async () => {
    if (quantity == -1 || buyingPrice == -1) {
      toast.warn(PRODUCTS_CONFIG.requiredData);
      return;
    }

    if (quantity <= 0 || buyingPrice <= 0) {
      toast.warn(PRODUCTS_CONFIG.nonZeroTerms);
      return;
    }

    const addStockFields: AddStockInput = {
      id: product?.id,
      quantity: Number(quantity),
      buyingPrice: Number(buyingPrice),
    };

    const success = await addStock(addStockFields);

    if (success) {
      onClose();
    }
  };

  const _renderModalHeader = () => {
    return (
      <S.Header>
        <S.CloseButton onClick={onClose}></S.CloseButton>
        <S.Title id="contained-modal-title-vcenter">
          {PRODUCTS_CONFIG.addStockTitle}
        </S.Title>
      </S.Header>
    );
  };

  const _renderModalBody = () => {
    return (
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.quantity}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="number"
                min="0"
                required
                placeholder="Quantity"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{PRODUCTS_CONFIG.buyingPrice}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="number"
                min="0"
                required
                placeholder="Buying price (per unit)"
                onChange={(e) => setBuyingPrice(Number(e.target.value))}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
            <Form.Label>{PRODUCTS_CONFIG.updatedPrice}</Form.Label>
            <S.ResultCard>
              <S.ResultLabel>
                {PRODUCTS_CONFIG.currentStock}: {Number(product?.quantity || 0)}
              </S.ResultLabel>
              <S.ResultValue>
                ₹ {Number(projectedPrice).toFixed(2)}
              </S.ResultValue>
            </S.ResultCard>
          </Form.Group>
        </Form>
      </Modal.Body>
    );
  };

  const _renderModalFooter = () => {
    return (
      <S.Footer>
        <S.Button $bgColor={theme.colors.primary} onClick={_addStock}>
          {PRODUCTS_CONFIG.submitButton}
        </S.Button>
      </S.Footer>
    );
  };

  return (
    <S.ModalContainer
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      onHide={onClose}
      backdrop="static"
    >
      {_renderModalHeader()}
      {_renderModalBody()}
      {_renderModalFooter()}
    </S.ModalContainer>
  );
};
