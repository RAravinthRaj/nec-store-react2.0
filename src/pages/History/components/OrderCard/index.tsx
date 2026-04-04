/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useState } from "react";
import { useIsNotDesktop, useTheme } from "../../../../hooks";
import * as S from "./styles";
import { ViewItemModal } from "../ViewItem";
import { HISTORY_CONFIG } from "../../config";

export interface IOrderCard {
  individualOrder: any;
}

export const OrderCard = ({ individualOrder }: IOrderCard) => {
  const theme = useTheme();
  const isMobile = useIsNotDesktop();
  const [modal, setModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
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

  const _renderMobileLayout = () => {
    return (
      <S.MobileAccordion>
        <S.MobileAccordionHeader
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          <S.MobileAccordionTitleBlock>
            <S.MobileLabel>{HISTORY_CONFIG.orderNumber}</S.MobileLabel>
            <S.MobilePrimaryValue>{individualOrder?.orderID}</S.MobilePrimaryValue>
          </S.MobileAccordionTitleBlock>
          <S.MobileChevron $expanded={expanded} />
        </S.MobileAccordionHeader>

        <S.MobileAccordionBody $expanded={expanded}>
          <S.MobileAccordionInner>
            <S.MobileGrid>
              <S.MobileInfoBox>
                <S.MobileLabel>{HISTORY_CONFIG.orderBy}</S.MobileLabel>
                <S.MobileValue>{individualOrder?.orderBy}</S.MobileValue>
              </S.MobileInfoBox>

              <S.MobileInfoBox>
                <S.MobileLabel>{HISTORY_CONFIG.date}</S.MobileLabel>
                <S.MobileValue>{individualOrder?.date}</S.MobileValue>
              </S.MobileInfoBox>

              <S.MobileTotalBox>
                <S.MobileLabel>{HISTORY_CONFIG.prMrp}</S.MobileLabel>
                <S.MobileTotalValue>
                  {Number(individualOrder?.totalAmount).toFixed(2)}
                </S.MobileTotalValue>
                <S.MobileSubtleText>
                  {itemCount} item{itemCount === 1 ? "" : "s"}
                </S.MobileSubtleText>
              </S.MobileTotalBox>
            </S.MobileGrid>

            <S.MobileButtonRow>
              <S.Button
                $bgColor={theme.colors.primary}
                onClick={() => setModal(true)}
              >
                <S.ViewIcon />
                {HISTORY_CONFIG.viewButton}
              </S.Button>
            </S.MobileButtonRow>
          </S.MobileAccordionInner>
        </S.MobileAccordionBody>
      </S.MobileAccordion>
    );
  };

  return (
    <div>
      {isMobile ? (
        _renderMobileLayout()
      ) : (
        <S.CardContainer>
          {_renderTitle()}
          {_renderBody()}
        </S.CardContainer>
      )}
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
