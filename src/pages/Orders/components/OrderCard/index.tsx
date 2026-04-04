/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useState } from "react";
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { ViewItemModal } from "../ViewItem";
import { ORDERS_CONFIG } from "../../config";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSwalComp } from "../../../../components";

export interface IOrderCard {
  individualOrder: any;
  cancelOrder: (orderId: string) => void;
  updateOrder: (
    orderId: string,
    deliveryStatus?: string,
    paidStatus?: string,
  ) => void;
}

export const OrderCard = ({
  individualOrder,
  cancelOrder,
  updateOrder,
}: IOrderCard) => {
  const theme = useTheme();
  const [modal, setModal] = useState(false);
  const itemCount = individualOrder?.products?.length || 0;
  const paidStatus = individualOrder?.paidStatus || "unpaid";
  const deliveryStatus = individualOrder?.deliveryStatus || "pending";

  const showSwal = useSwalComp();
  const _cancelOrder = () => {
    showSwal({
      title: "Cancel Order",
      subtitle: "Are you sure you want to cancel this order?",
      type: "warning",
      confirmButtonText: "Yes, Cancel Order",
      cancelButtonText: "Cancel",
      onConfirmedPress: () => {
        cancelOrder(individualOrder?.orderId);
      },
    });
  };

  const _renderTitle = () => {
    return (
      <S.TitleContainer $bgColor={theme.colors.primary}>
        <S.TitleBlock>
          <S.TitleLabel>{ORDERS_CONFIG.orderNumber}</S.TitleLabel>
          <S.Title>{individualOrder?.orderNumber}</S.Title>
        </S.TitleBlock>
        <S.StatusGroup>
          <S.StatusPill
            $tone={paidStatus === "paid" ? theme.colors.paid : theme.colors.unpaid}
          >
            {paidStatus}
          </S.StatusPill>
          <S.StatusPill
            $tone={
              deliveryStatus === "delivered"
                ? theme.colors.delivered
                : theme.colors.pending
            }
          >
            {deliveryStatus}
          </S.StatusPill>
        </S.StatusGroup>
      </S.TitleContainer>
    );
  };

  const _renderButton = () => {
    return (
      <S.ButtonContainer>
        <S.Button
          $bgColor={theme.colors.primary}
          onClick={() => setModal(true)}
        >
          <S.ViewIcon />
          {ORDERS_CONFIG.viewButton}
        </S.Button>
        <S.Button $bgColor={theme.colors.primary} onClick={_cancelOrder}>
          <RiDeleteBin5Line />
          {ORDERS_CONFIG.cancelButton}
        </S.Button>
      </S.ButtonContainer>
    );
  };

  const _renderBody = () => {
    return (
      <S.BodyContainer>
        <S.MetaGrid>
          <S.MetaCard>
            <S.MetaLabel>{ORDERS_CONFIG.orderBy}</S.MetaLabel>
            <S.OrderNameContainer>{individualOrder?.orderBy}</S.OrderNameContainer>
          </S.MetaCard>
          <S.MetaCard>
            <S.MetaLabel>{ORDERS_CONFIG.date}</S.MetaLabel>
            <S.DateContainer>{individualOrder?.date}</S.DateContainer>
          </S.MetaCard>
        </S.MetaGrid>
        <S.TotalStrip>
          <S.AmountBlock>
            <S.MetaLabel>{ORDERS_CONFIG.prMrp}</S.MetaLabel>
            <S.RupeeContainer>
              {Number(individualOrder?.totalAmount).toFixed(2)}
            </S.RupeeContainer>
          </S.AmountBlock>
          <S.ItemCount>{itemCount} item{itemCount === 1 ? "" : "s"}</S.ItemCount>
        </S.TotalStrip>
        {_renderButton()}
      </S.BodyContainer>
    );
  };

  return (
    <div>
      <S.CardContainer>
        {_renderTitle()}
        {_renderBody()}
      </S.CardContainer>
      <ViewItemModal
        modalShow={modal}
        onClose={() => setModal(false)}
        individualOrder={individualOrder}
        updateOrder={updateOrder}
      />
    </div>
  );
};
