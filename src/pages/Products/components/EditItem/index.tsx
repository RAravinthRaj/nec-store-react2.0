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
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { PRODUCTS_CONFIG } from "../../config";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { UpdateProductInput } from "../../services/graphql";
import { convertFileToBase64 } from "../../../../utils";

export interface IEditItem {
  modalShow: boolean;
  onClose: () => void;
  product: any;
  categories: any[];
  updateProduct(args: UpdateProductInput): Promise<boolean>;
}

export const EditItemModal = ({
  modalShow,
  onClose,
  product,
  categories,
  updateProduct,
}: IEditItem) => {
  const theme = useTheme();

  const [title, setTitle] = useState(product?.title);
  const [quantity, setQuantity] = useState<number>(product?.quantity);
  const [buyingPrice, setBuyingPrice] = useState<number>(Number(product?.price));
  const [sellingPrice, setSellingPrice] = useState<number>(
    Number(product?.sellingPrice),
  );
  const [categoryId, setCategoryId] = useState<string>("");
  const [productImage, setProductImage] = useState<string>(
    product?.productImage,
  );

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (modalShow && product) {
      setTitle(product.title || "");
      setQuantity(Number(product.quantity) || 0);
      setBuyingPrice(Number(product.price) || 0);
      setSellingPrice(Number(product.sellingPrice) || 0);
      setCategoryId("");
      setProductImage(product.productImage || "");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [modalShow, product]);

  const _handleCategoryChange = (event: SelectChangeEvent<unknown>) => {
    setCategoryId(event.target.value as string);

    if (!modalShow) {
      setCategoryId("");
    }
  };

  const _updateProduct = async () => {
    if (quantity == 0 || buyingPrice == 0 || sellingPrice == 0) {
      toast.warn(PRODUCTS_CONFIG.nonZeroTerms);
      return;
    }

    const updatedFields: UpdateProductInput = {
      id: product?.id,
    };

    if (title.trim() !== product?.title) {
      updatedFields.title = title.trim();
    }

    if (categoryId.trim() && categoryId.trim() !== product?.categoryId) {
      updatedFields.categoryId = categoryId.trim();
    }

    if (Number(quantity) !== product?.quantity) {
      updatedFields.quantity = Number(quantity);
    }

    if (Number(buyingPrice) !== Number(product?.price)) {
      updatedFields.buyingPrice = Number(buyingPrice);
    }

    if (Number(sellingPrice) !== Number(product?.sellingPrice)) {
      updatedFields.sellingPrice = Number(sellingPrice);
    }

    if (productImage && productImage !== product?.productImage) {
      updatedFields.productImage = productImage;
    }

    const success = await updateProduct(updatedFields);

    if (success) {
      onClose();
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validImageTypes = PRODUCTS_CONFIG.validImageTypes;

    if (!validImageTypes.includes(file.type)) {
      toast.error("Invalid ProfilePicture");
      return;
    }

    try {
      const base64 = await convertFileToBase64(file, 150, 150, 0.7);
      setProductImage(base64);
    } catch (err) {
      console.error(err);
      toast.error("Invalid ProfilePicture");
    }
  };

  const _resetImageField = () => {
    setProductImage(product?.productImage);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const _renderMenu = () => {
    return (
      <S.StyledFormControl fullWidth>
        <Select
          value={categoryId}
          onChange={_handleCategoryChange}
          displayEmpty
          inputProps={{ "aria-label": "Category" }}
          renderValue={(selected) => {
            const selectedCat = categories.find((cat) => cat.id === selected);
            return selectedCat?.name || product?.category;
          }}
          style={{ color: theme.colors.textSecondary }}
        >
          {categories?.map((cat, index) => {
            return (
              <MenuItem key={cat?.id} value={cat?.id}>
                {cat?.name}
                {index != categories.length && <S.Divider />}
              </MenuItem>
            );
          })}
        </Select>
      </S.StyledFormControl>
    );
  };

  const _renderImageField = () => {
    return (
      <>
        <Form.Label>
          <S.SubTitle>
            {PRODUCTS_CONFIG.image}
            <S.FileTypesHint>
              {PRODUCTS_CONFIG.acceptedImageTypes}
            </S.FileTypesHint>
          </S.SubTitle>
        </Form.Label>
        <S.ProductImageContainer>
          <input
            ref={fileInputRef}
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
          {productImage && (
            <S.ImageWrapper>
              <S.PreviewProductImage src={productImage} alt="Preview" />
              {productImage !== product?.productImage && (
                <S.CancelButton onClick={_resetImageField}>
                  {PRODUCTS_CONFIG.cancelIcon}
                </S.CancelButton>
              )}
            </S.ImageWrapper>
          )}
        </S.ProductImageContainer>
      </>
    );
  };

  const _renderModalHeader = () => {
    return (
      <S.Header>
        <S.CloseButton onClick={onClose}></S.CloseButton>
        <S.Title id="contained-modal-title-vcenter">
          {PRODUCTS_CONFIG.editItemTitle}
        </S.Title>
      </S.Header>
    );
  };

  const _renderModalBody = () => {
    return (
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.title}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.category}</Form.Label>
            {_renderMenu()}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PRODUCTS_CONFIG.quantity}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="number"
                min="0"
                value={quantity}
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
                value={buyingPrice}
                onChange={(e) => setBuyingPrice(Number(e.target.value))}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
            <Form.Label>{PRODUCTS_CONFIG.sellingPrice}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="number"
                min="0"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(Number(e.target.value))}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {_renderImageField()}
          </Form.Group>
        </Form>
      </Modal.Body>
    );
  };

  const _renderModalFooter = () => {
    return (
      <S.Footer>
        <S.Button
          $bgColor={theme.colors.primary}
          onClick={() => _updateProduct()}
        >
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
