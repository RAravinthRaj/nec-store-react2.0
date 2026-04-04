/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import * as S from "./styles";
import { CARTS_CONFIG } from "../../config";
import { useTheme } from "../../../../hooks/useTheme.hook";
import { useEffect, useState } from "react";
import { getItemInLocalStorage } from "../../../../utils";
import { useSwalComp } from "../../../../components";
import { toast } from "react-toastify";

export interface IFooter {
  createOrder(): void;
  isMobileSheet?: boolean;
  isProcessing?: boolean;
}

export const Footer = ({
  createOrder,
  isMobileSheet = false,
  isProcessing = false,
}: IFooter) => {
  const theme = useTheme();
  const [totalAmount, setTotalAmount] = useState<number>(
    getItemInLocalStorage("totalPrice") || 0,
  );
  const [itemCount, setItemCount] = useState<number>(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleCartUpdate = () => {
      const total = getItemInLocalStorage("totalPrice") || 0;
      const cartItems = getItemInLocalStorage("cartProducts") || [];
      const totalItems = Array.isArray(cartItems)
        ? cartItems.reduce(
            (sum: number, item: any) => sum + Number(item?.quantity || 0),
            0,
          )
        : 0;

      setTotalAmount(total);
      setItemCount(totalItems);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    handleCartUpdate();

    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const showSwal = useSwalComp();

  const _handlePlaceOrder = () => {
    // if (Number(totalAmount) < 10) {
    //   toast.error("Minimum order amount should be at least Rs. 10.");
    //   return;
    // }

    showSwal({
      title: "Place Order",
      subtitle: "Are you sure you want to place order with these items?",
      type: "warning",
      confirmButtonText: "Yes, Place Order",
      cancelButtonText: "Cancel",
      onConfirmedPress: () => {
        createOrder();
      },
    });
  };

  const _renderSummaryContent = () => (
    <>
      <S.FooterHeader>
        <S.FooterTitle>Order Summary</S.FooterTitle>
        <S.FooterSubtitle>
          Review your final total and complete checkout in one step.
        </S.FooterSubtitle>
      </S.FooterHeader>

      <S.SummaryGrid>
        <S.SummaryRow>
          <S.SummaryLabel>Items</S.SummaryLabel>
          <S.SummaryValue>{itemCount}</S.SummaryValue>
        </S.SummaryRow>
        <S.SummaryRow>
          <S.SummaryLabel>Subtotal</S.SummaryLabel>
          <S.SummaryValue>₹ {Number(totalAmount).toFixed(2)}</S.SummaryValue>
        </S.SummaryRow>
        <S.SummaryRow>
          <S.SummaryLabel>Delivery</S.SummaryLabel>
          <S.SummaryValue>Free</S.SummaryValue>
        </S.SummaryRow>
      </S.SummaryGrid>

      <S.Divider />

      <S.SummaryRow>
        <S.SummaryLabel $isHighlight>Total</S.SummaryLabel>
        <S.SummaryValue $isHighlight>
          ₹ {Number(totalAmount).toFixed(2)}
        </S.SummaryValue>
      </S.SummaryRow>

      <S.FooterContent>
        {CARTS_CONFIG.prMRP}
        {Number(totalAmount).toFixed(2)}
      </S.FooterContent>

      <S.Button
        $bgColor={theme.colors.primary}
        onClick={_handlePlaceOrder}
        disabled={isProcessing}
      >
        <S.CartIcon />
        {isProcessing ? "Processing..." : CARTS_CONFIG.placeButton}
      </S.Button>
    </>
  );

  if (isMobileSheet) {
    return (
      <>
        <S.MobileCheckoutBar>
          <S.MobileCheckoutMeta>
            <S.MobileCheckoutLabel>Total</S.MobileCheckoutLabel>
            <S.MobileCheckoutValue>
              ₹ {Number(totalAmount).toFixed(2)}
            </S.MobileCheckoutValue>
          </S.MobileCheckoutMeta>
          <S.MobileCheckoutButton
            $bgColor={theme.colors.primary}
            disabled={isProcessing}
            onClick={() => {
              setIsSheetOpen(true);
            }}
          >
            {isProcessing ? "Processing..." : "Checkout"}
          </S.MobileCheckoutButton>
        </S.MobileCheckoutBar>

        {isSheetOpen && (
          <>
            <S.MobileSheetOverlay
              onClick={() => {
                setIsSheetOpen(false);
              }}
            />
            <S.MobileSheetContainer>
              <S.MobileSheetHandle />
              <S.MobileSheetClose
                type="button"
                onClick={() => {
                  setIsSheetOpen(false);
                }}
              >
                Close
              </S.MobileSheetClose>
              <S.FooterBox $bgColor={theme.colors.secondaryBackGround}>
                {_renderSummaryContent()}
              </S.FooterBox>
            </S.MobileSheetContainer>
          </>
        )}
      </>
    );
  }

  return (
    <S.FooterBox $bgColor={theme.colors.secondaryBackGround}>
      {_renderSummaryContent()}
    </S.FooterBox>
  );
};
