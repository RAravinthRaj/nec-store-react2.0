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
import { HISTORY_CONFIG } from "../../config";

export interface IOrderCard {
  individualOrder: any;
}

export const OrderCard = ({ individualOrder }: IOrderCard) => {
  const theme = useTheme();
  const [modal, setModal] = useState(false);
  const itemCount = individualOrder?.products?.length || 0;
  const paidStatus = individualOrder?.paidStatus || "unpaid";
  const deliveryStatus = individualOrder?.deliveryStatus || "pending";

  const _renderTitle = () => {
    return (
      <S.TitleContainer $bgColor={theme.colors.primary}>
        <S.TitleBlock>
          <S.TitleLabel>{HISTORY_CONFIG.orderNumber}</S.TitleLabel>
          <S.Title>{individualOrder?.orderID}</S.Title>
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
          {HISTORY_CONFIG.viewButton}
        </S.Button>
      </S.ButtonContainer>
    );
  };

  const _renderBody = () => {
    return (
      <S.BodyContainer>
        <S.MetaGrid>
          <S.MetaCard>
            <S.MetaLabel>{HISTORY_CONFIG.orderBy}</S.MetaLabel>
            <S.OrderNameContainer>{individualOrder?.orderBy}</S.OrderNameContainer>
          </S.MetaCard>
          <S.MetaCard>
            <S.MetaLabel>{HISTORY_CONFIG.date}</S.MetaLabel>
            <S.DateContainer>{individualOrder?.date}</S.DateContainer>
          </S.MetaCard>
        </S.MetaGrid>
        <S.TotalStrip>
          <S.AmountBlock>
            <S.MetaLabel>{HISTORY_CONFIG.prMrp}</S.MetaLabel>
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
        products={individualOrder?.products}
        totalPrice={individualOrder?.totalAmount}
        paidStatus={individualOrder?.paidStatus}
        deliveryStatus={individualOrder?.deliveryStatus}
      />
    </div>
  );
};
