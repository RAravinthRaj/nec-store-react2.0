/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as S from "./styles";
import { useIsNotDesktop, useTheme } from "../../../../hooks";
import { RECENT_CONFIG } from "../../config";
import {
  getItemInLocalStorage,
  setItemInLocalStorage,
} from "../../../../utils";
import { toast } from "react-toastify";

export interface IRecentProducts {
  products: any[];
}

export const RecentProducts = ({ products }: IRecentProducts) => {
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsNotDesktop();
  const theme = useTheme();

  const itemAdded = ({ product }: any) => {
    try {
      const cartProducts = getItemInLocalStorage("cartProducts") || [];

      const existingProduct = cartProducts.find(
        (item: { id: any }) => item.id === product?.id,
      );

      if (!existingProduct) {
        const newProduct = {
          id: product?.id,
          quantity: 1,
          price: Number(product?.price),
        };
        cartProducts.push(newProduct);

        setItemInLocalStorage("cartProducts", cartProducts);

        toast.success(RECENT_CONFIG.cartItemToastSuccess);
        window.dispatchEvent(new Event("cartUpdated"));
      } else {
        toast.info(RECENT_CONFIG.itemAlreadyInCart);
      }
    } catch (error) {
      toast.error(RECENT_CONFIG.cartErrorMessage);
    }
  };

  const Card = (product: any) => {
    return (
      <S.CardContainer>
        <S.ImageWrapper>
          <img
            src={
              product?.product?.productImage ?? theme.images.defaultProductImage
            }
          />
        </S.ImageWrapper>
        <S.ContentWrapper>
          <div>
            <S.Title>{product?.product?.title}</S.Title>
            <S.CategoryContainer $bgColor={theme.colors.primary}>
              {product?.product?.category}
            </S.CategoryContainer>
            <S.Details>
              <div>
                {RECENT_CONFIG.quantity} {product?.product?.quantity}
              </div>
              <div>
                {RECENT_CONFIG.mrp}
                {Number(product?.product?.price).toFixed(2)}
              </div>
            </S.Details>
          </div>
          <S.Button
            $bgColor={theme.colors.primary}
            onClick={() => {
              itemAdded(product);
            }}
          >
            <S.CartIcon />
            {RECENT_CONFIG.addToCartButton}
          </S.Button>
        </S.ContentWrapper>
      </S.CardContainer>
    );
  };

  const _renderCardData = () => (
    <div>
      {products.map((product) => {
        return <Card product={product} key={product?.id} />;
      })}
    </div>
  );

  const list = () => (
    <Box
      sx={{
        width: isMobile ? "100%" : 400,
        display: "flex",
        flexDirection: "column",
        height: isMobile ? "70vh" : "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          borderBottom: "1px solid #e0e0e0",
          backgroundColor: "#fff",
          flexShrink: 0,
        }}
      >
        <S.CloseButton onClick={() => setOpen(false)} />
        <S.DrawerTitle>{RECENT_CONFIG.recentlyViewed}</S.DrawerTitle>
        <Box sx={{ width: "28px" }} />
      </Box>

      <Box
        sx={{
          overflowY: "auto",
          flexGrow: 1,
          padding: "10px",
        }}
      >
        {_renderCardData()}
      </Box>
    </Box>
  );

  return (
    <div>
      <S.RecentIcon onClick={() => setOpen(true)} />
      <SwipeableDrawer
        anchor={isMobile ? "bottom" : "right"}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};
