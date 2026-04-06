/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Modal from "react-bootstrap/Modal";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";
import { ORDERS_CONFIG } from "../../config";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { MenuItem } from "@mui/material";
import { TiTick } from "react-icons/ti";

export interface IAddItem {
  modalShow: boolean;
  onClose: () => void;
  individualOrder: any;
  updateOrder: (
    orderId: string,
    deliveryStatus?: string,
    paidStatus?: string,
  ) => void;
}

export const ViewItemModal = ({
  modalShow,
  onClose,
  individualOrder,
  updateOrder,
}: IAddItem) => {
  const theme = useTheme();
  const [paidStatus, setPaidStatus] = useState(individualOrder?.paidStatus);
  const [deliveryStatus, setDeliveryStatus] = useState(
    individualOrder?.deliveryStatus,
  );

  useEffect(() => {
    if (individualOrder) {
      setPaidStatus(individualOrder.paidStatus);
      setDeliveryStatus(individualOrder.deliveryStatus);
    }
  }, [individualOrder, modalShow]);

  const _handleClose = () => {
    setPaidStatus(individualOrder?.paidStatus);
    setDeliveryStatus(individualOrder?.deliveryStatus);
    onClose();
  };

  const _changeStatus = () => {
    if (
      individualOrder?.paidStatus !== paidStatus ||
      individualOrder?.deliveryStatus !== deliveryStatus
    ) {
      updateOrder(individualOrder?.orderId, paidStatus, deliveryStatus);
      _handleClose();
    } else {
      toast.info("Nothing to Update", { toastId: "no-update" });
    }
  };
  const _renderDropDown = (
    data: string,
    setData: (value: string) => void,
    currentValue: string,
    changedValue: string,
    displayCurrentValue: string,
    displayChangedValue: string,
    orderStatus: "paidStatus" | "deliveryStatus",
  ) => {
    const isPaidSection = orderStatus === "paidStatus";
    const isDeliveredSection = orderStatus === "deliveryStatus";

    const shouldShowGreenButton =
      (isPaidSection && individualOrder?.paidStatus === "paid") ||
      (isDeliveredSection && individualOrder?.deliveryStatus === "delivered");

    if (shouldShowGreenButton) {
      return (
        <S.Button $bgColor={theme.colors.delivered} $isValid={false}>
          <TiTick size={25} />
          {displayCurrentValue}
        </S.Button>
      );
    }

    return (
      <S.DropDown>
        <S.StyledSelect value={data} onChange={(e) => setData(e.target.value)}>
          <MenuItem value={currentValue} disabled={data === currentValue}>
            {displayCurrentValue}
          </MenuItem>
          <MenuItem value={changedValue} disabled={data === changedValue}>
            {displayChangedValue}
          </MenuItem>
        </S.StyledSelect>
      </S.DropDown>
    );
  };

  const _renderBodyData = () => {
    return (
      <S.BodyComponent>
        {individualOrder?.products.map((item: any, index: number) => (
          <div key={index}>
            <S.ItemBox>
              {Object.entries(item).map(([key, value], id) => {
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
                    (item.price ?? 0) * (item.quantity ?? 0),
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
          {ORDERS_CONFIG.title?.map((d, index) => (
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
        {ORDERS_CONFIG.prMrp}
        {Number(individualOrder?.totalAmount).toFixed(2)}
      </S.Amount>
    );
  };

  const _renderFooter = () => {
    return (
      <S.Footer>
        {_renderDropDown(
          paidStatus,
          setPaidStatus,
          "paid",
          "unpaid",
          ORDERS_CONFIG.amountReceived,
          ORDERS_CONFIG.amountNotReceived,
          "paidStatus",
        )}

        {_renderDropDown(
          deliveryStatus,
          setDeliveryStatus,
          "delivered",
          "not_delivered",
          ORDERS_CONFIG.deliver,
          ORDERS_CONFIG.deliverPending,
          "deliveryStatus",
        )}

        <S.Button
          $bgColor={theme.colors.primary}
          onClick={_changeStatus}
          $isValid={individualOrder?.orderStatus === "completed"}
        >
          {ORDERS_CONFIG.save}
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
      animation={false}
      restoreFocus={false}
      enforceFocus={false}
      onHide={_handleClose}
    >
      <S.CloseButton onClick={_handleClose}></S.CloseButton>
      {_renderBody()}
      {_renderAmount()}
      {_renderFooter()}
    </S.ModalContainer>
  );
};
