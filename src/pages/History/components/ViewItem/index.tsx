/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Modal from "react-bootstrap/Modal";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";
import { HISTORY_CONFIG } from "../../config";
import { TiTick } from "react-icons/ti";
import { LuClock3 } from "react-icons/lu";

export interface IAddItem {
  modalShow: boolean;
  onClose: () => void;
  products: any[];
  totalPrice: string;
  deliveryStatus: string;
  paidStatus: string;
}

export const ViewItemModal = ({
  modalShow: modalShow,
  onClose,
  products,
  totalPrice,
  paidStatus,
  deliveryStatus,
}: IAddItem) => {
  const theme = useTheme();

  const _renderBodyData = () => {
    return (
      <S.BodyComponent>
        {products.map((d, index) => (
          <div key={index}>
            <S.ItemBox>
              {Object.entries(d).map(([key, value], id) => {
                let displayValue = value;

                if (key === "productImage") {
                  return (
                    <S.TitleComp key={id}>
                      <S.productImage
                        src={value || theme.images.defaultProductImage}
                      />
                    </S.TitleComp>
                  );
                }

                if (key === "price") {
                  displayValue = Number(
                    (d.price ?? 0) * (d.quantity ?? 0),
                  ).toFixed(2);
                }

                return <S.TitleComp key={id}>{displayValue}</S.TitleComp>;
              })}
            </S.ItemBox>
            <S.Divider />
          </div>
        ))}
      </S.BodyComponent>
    );
  };

  const _renderBody = () => {
    return (
      <Modal.Body as={S.ModalBody}>
        <S.TitleBox $bgColor={theme.colors.secondaryBackGround}>
          {HISTORY_CONFIG.title?.map((d, index) => (
            <S.TitleComp key={index}>{d}</S.TitleComp>
          ))}
        </S.TitleBox>
        {_renderBodyData()}
      </Modal.Body>
    );
  };

  const _renderAmount = () => {
    return (
      <S.Amount>
        {HISTORY_CONFIG.prMrp}
        {Number(totalPrice).toFixed(2)}
      </S.Amount>
    );
  };

  const _renderFooter = () => {
    return (
      <S.Footer>
        <S.Button
          $bgColor={
            paidStatus === "paid" ? theme.colors.paid : theme.colors.unpaid
          }
        >
          {paidStatus === "paid" ? (
            <TiTick size={20} />
          ) : (
            <LuClock3 size={20} />
          )}
          {paidStatus === "paid"
            ? HISTORY_CONFIG.amountReceived
            : HISTORY_CONFIG.amountNotReceived}
        </S.Button>

        <S.Button
          $bgColor={
            deliveryStatus === "delivered"
              ? theme.colors.delivered
              : theme.colors.pending
          }
        >
          {deliveryStatus === "delivered" ? (
            <TiTick size={20} />
          ) : (
            <LuClock3 size={20} />
          )}
          {deliveryStatus === "delivered"
            ? HISTORY_CONFIG.deliver
            : HISTORY_CONFIG.deliverPending}
        </S.Button>
      </S.Footer>
    );
  };

  return (
    <S.ModalContainer
      aria-labelledby="contained-modal-title-vcenter"
      size="xl"
      centered
      show={modalShow}
      backdrop="static"
      onHide={() => onClose()}
    >
      <S.CloseButton onClick={onClose}></S.CloseButton>
      {_renderBody()}
      {_renderAmount()}
      {_renderFooter()}
    </S.ModalContainer>
  );
};
