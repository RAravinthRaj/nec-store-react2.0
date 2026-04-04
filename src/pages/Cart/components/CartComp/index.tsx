/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { CARTS_CONFIG } from "../../config";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import {
  getItemInLocalStorage,
  setItemInLocalStorage,
} from "../../../../utils";
import { useNavigate } from "react-router-dom";
import { useSwalComp } from "../../../../components";

export interface IContainerComp {
  cartProductsDetails: any[];
  setProductIDs: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CartComp = ({
  cartProductsDetails,
  setProductIDs,
}: IContainerComp) => {
  const theme = useTheme();
  const lastToastTimeRef = useRef<number | null>(null);
  const [cartProducts, setCartProducts] = useState<any[]>(
    getItemInLocalStorage("cartProducts") || [],
  );

  const navigate = useNavigate();

  useEffect(() => {
    const syncCart = () => {
      const localCart = getItemInLocalStorage("cartProducts") || [];
      const totalPrice = localCart.reduce(
        (sum: number, product: any) => sum + Number(product.price || 0),
        0,
      );

      setItemInLocalStorage("totalPrice", totalPrice);
      setCartProducts(localCart);
    };

    syncCart();

    window.addEventListener("cartUpdated", syncCart);
    window.addEventListener("storage", syncCart);

    return () => {
      window.removeEventListener("cartUpdated", syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, [navigate]);

  const showSwal = useSwalComp();

  const _deleteItem = (productId: string) => {
    showSwal({
      title: CARTS_CONFIG.swal.title,
      subtitle: CARTS_CONFIG.swal.text,
      type: "warning",
      confirmButtonText: CARTS_CONFIG.swal.confirmButtonText,
      cancelButtonText: "Cancel",
      onConfirmedPress: () => {
        const updatedCart = cartProducts.filter(
          (item) => String(item.id) !== String(productId),
        );
        setCartProducts(updatedCart);
        setItemInLocalStorage("cartProducts", updatedCart);
        setProductIDs(updatedCart.map((item) => item.id));
        window.dispatchEvent(new Event("cartUpdated"));

        toast.success("Item Removed From Cart");
      },
    });
  };

  const _updateProduct = (
    isDecrement: boolean,
    item: any,
    productInCart: any,
  ) => {
    const now = Date.now();
    const lastShown = lastToastTimeRef.current;
    const maxQty = item?.quantity;
    const currentQty = productInCart?.quantity || 1;

    const showToast = (message: string) => {
      if (!lastShown || now - lastShown > 5100) {
        toast.warn(message);
        lastToastTimeRef.current = now;
      }
    };

    if (!item?.id) {
      return showToast("Product not found in cart");
    }

    const updatedCart = [...cartProducts];
    const index = updatedCart.findIndex(
      (product) => String(product.id) === String(item.id),
    );

    if (index === -1) return showToast("Product not found in cart");

    const selectedCartProduct = updatedCart[index];
    const selectedQuantity = Number(
      selectedCartProduct?.quantity || currentQty,
    );

    if (isDecrement) {
      if (selectedQuantity <= 1)
        return showToast("Quantity must be at least 1");
      updatedCart[index].quantity = selectedQuantity - 1;
      updatedCart[index].price = (selectedQuantity - 1) * item?.price;
    } else {
      if (selectedQuantity >= maxQty) {
        return showToast("Quantity exceeds limit");
      }
      updatedCart[index].quantity = selectedQuantity + 1;
      updatedCart[index].price = (selectedQuantity + 1) * item?.price;
    }

    setCartProducts(updatedCart);
    setItemInLocalStorage("cartProducts", updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const _renderQuantityControls = (item: any, productInCart: any) => (
    <S.QuantityContainer $bgColor={theme.colors.secondaryBackGround}>
      <S.QuantityButton
        $bgColor={theme.colors.backGround}
        onClick={() => _updateProduct(true, item, productInCart)}
      >
        <FaMinus />
      </S.QuantityButton>

      <S.QuantityWrap>{productInCart?.quantity}</S.QuantityWrap>

      <S.QuantityButton
        $bgColor={theme.colors.backGround}
        onClick={() => _updateProduct(false, item, productInCart)}
      >
        <FaPlus />
      </S.QuantityButton>
    </S.QuantityContainer>
  );

  const _renderCartItem = (item: any, index: number) => {
    const itemId = item?.id ?? item?.productId;
    const productInCart = cartProducts.find(
      (product) => String(product.id) === String(itemId),
    );

    if (!productInCart) {
      return null;
    }

    const orderQuantity = productInCart?.quantity || 1;
    const lineTotal = Number(orderQuantity * item?.price).toFixed(2);

    return (
      <S.ItemBox key={itemId ?? index}>
        <S.ImageWrap
          src={item?.productImage ?? theme.images.defaultProductImage}
        />

        <S.ItemContent>
          <S.ItemHeader>
            <S.ItemTitleBlock>
              <S.ItemCategory>
                {item?.category?.name || item?.category || "General"}
              </S.ItemCategory>
              <S.ItemTitle title={item?.title}>{item?.title}</S.ItemTitle>
            </S.ItemTitleBlock>

            <S.ItemPriceTag>
              <S.ItemPriceLabel>Line Total</S.ItemPriceLabel>
              <S.ItemPriceValue>₹ {lineTotal}</S.ItemPriceValue>
            </S.ItemPriceTag>
          </S.ItemHeader>

          <S.ItemFooter>
            <S.ItemInfoGrid>
              <S.InfoCard>
                <S.InfoLabel>Price</S.InfoLabel>
                <S.InfoValue>
                  ₹ {Number(item?.price ?? 0).toFixed(2)}
                </S.InfoValue>
              </S.InfoCard>
            </S.ItemInfoGrid>

            <S.ItemActionRow>
              {_renderQuantityControls(item, productInCart)}
              <S.RemoveButton
                $bgColor={theme.colors.primary}
                onClick={() => _deleteItem(itemId)}
                title="Remove item"
              >
                <S.CancelComp $bgColor={theme.colors.primary} />
              </S.RemoveButton>
            </S.ItemActionRow>
          </S.ItemFooter>
        </S.ItemContent>
      </S.ItemBox>
    );
  };

  return (
    <S.SectionCard>
      <S.CartListHeader>
        <div>
          <S.CartListTitle>Cart Items</S.CartListTitle>
        </div>
        <S.CartMetaPill>
          <S.DownloadIcon />
          {cartProducts.length} items in cart
        </S.CartMetaPill>
      </S.CartListHeader>

      <S.CartContainer>
        {cartProductsDetails.map((item, index) => _renderCartItem(item, index))}
      </S.CartContainer>
    </S.SectionCard>
  );
};
