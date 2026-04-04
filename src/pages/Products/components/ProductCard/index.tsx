/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import { useEffect, useState } from "react";
import { useTheme } from "../../../../hooks";
import { useSwalComp } from "../../../../components/Swal";
import * as S from "./styles";
import { EditItemModal } from "../EditItem";
import { toast } from "react-toastify";
import { PRODUCTS_CONFIG } from "../../config";
import {
  AddRecentInput,
  DeleteProductInput,
  UpdateProductInput,
} from "../../services/graphql";
import {
  getItemInLocalStorage,
  getUserDetails,
  setItemInLocalStorage,
} from "../../../../utils";

export interface IProductCard {
  product: any;
  categories: any[];
  updateProduct(args: UpdateProductInput): Promise<boolean>;
  deleteProduct(args: DeleteProductInput): Promise<boolean>;
  addRecent(args: AddRecentInput): Promise<boolean>;
  isRetailer: boolean;
  mode?: "products" | "stock";
  onAddStockClick?: (product: any) => void;
}

export const ProductCard = ({
  product,
  categories,
  updateProduct,
  deleteProduct,
  isRetailer,
  addRecent,
  mode = "products",
  onAddStockClick,
}: IProductCard) => {
  const theme = useTheme();
  const showAlert = useSwalComp();
  const [modal, setModal] = useState(false);
  const [userId] = useState<string>(getUserDetails()?.id);
  const [isAvailableInCart, setIsAvailableInCart] = useState(false);

  useEffect(() => {
    const cartProducts = getItemInLocalStorage("cartProducts") || [];
    const exists = cartProducts.some((item: any) => item.id === product?.id);
    setIsAvailableInCart(exists);
  }, [product?.id]);

  const itemAdded = () => {
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

        if (product?.id) {
          addRecent({ userId, productId: product.id });
        }

        setItemInLocalStorage("cartProducts", cartProducts);
        setIsAvailableInCart(true); // ✅ instant UI update

        toast.success(PRODUCTS_CONFIG.addItem);
        window.dispatchEvent(new Event("cartUpdated"));
      } else {
        setIsAvailableInCart(true);
        toast.info(PRODUCTS_CONFIG.itemAlreadyInCart);
      }
    } catch {
      toast.error(PRODUCTS_CONFIG.cartErrorMessage);
    }
  };

  const _getStockLabel = () => {
    if (product?.quantity <= PRODUCTS_CONFIG.threshold) {
      return PRODUCTS_CONFIG.lowStock;
    }

    return PRODUCTS_CONFIG.inStock;
  };

  const _deleteProduct = async () => {
    const success = await deleteProduct({
      id: product?.id,
    });

    if (!success) {
      toast.error(PRODUCTS_CONFIG.cartErrorMessage);
    }
  };

  const _renderCardInitialDetails = () => (
    <S.ProductDetailContainer>
      <S.ImageSection>
        <S.ImageContainer>
          <S.Image
            src={product.productImage ?? theme.images.defaultProductImage}
          />
        </S.ImageContainer>
      </S.ImageSection>
      <S.ContentSection>
        <S.CategoryContainer $bgColor={theme.colors.primary}>
          {product?.category}
        </S.CategoryContainer>

        {!isRetailer ? (
          <S.TitleRow>
            <S.TitleContainer title={product?.title}>{product?.title}</S.TitleContainer>
            <S.StockPill
              $isLowStock={product?.quantity <= PRODUCTS_CONFIG.threshold}
            >
              {_getStockLabel()}
            </S.StockPill>
          </S.TitleRow>
        ) : (
          <S.TitleContainer title={product?.title}>{product?.title}</S.TitleContainer>
        )}

        {!isRetailer ? (
          <>
            <S.PriceSection>
              <S.PriceLabel>Price</S.PriceLabel>
              <S.HighlightPrice>
                ₹ {Number(product?.price ?? 0).toFixed(2)}
              </S.HighlightPrice>
            </S.PriceSection>
          </>
        ) : (
          <>
            <S.RetailerQuantityText>
              Quantity:{" "}
              <S.RetailerQuantityValue>
                {product?.quantity}
              </S.RetailerQuantityValue>
            </S.RetailerQuantityText>
          </>
        )}
      </S.ContentSection>
    </S.ProductDetailContainer>
  );

  const _renderButton = () => {
    if (isRetailer && mode === "stock") {
      return (
        <>
          <S.RetailerPriceCard>
            <S.RetailerPriceItem>
              <S.RetailerPriceLabel>
                {PRODUCTS_CONFIG.currentStock}
              </S.RetailerPriceLabel>
              <S.RetailerPriceValue>
                {Number(product?.quantity ?? 0)}
              </S.RetailerPriceValue>
            </S.RetailerPriceItem>
            <S.RetailerPriceDivider />
            <S.RetailerPriceItem>
              <S.RetailerPriceLabel>
                {PRODUCTS_CONFIG.updatedPrice}
              </S.RetailerPriceLabel>
              <S.RetailerPriceValue $isSellingPrice>
                ₹ {Number(product?.price ?? 0).toFixed(2)}
              </S.RetailerPriceValue>
            </S.RetailerPriceItem>
          </S.RetailerPriceCard>
          <S.ButtonContainer>
            <S.Button
              $bgColor={theme.colors.primary}
              $canAdd
              onClick={() => onAddStockClick?.(product)}
            >
              <S.AddIcon />
              {PRODUCTS_CONFIG.addStockPageButton}
            </S.Button>
          </S.ButtonContainer>
        </>
      );
    }

    if (isRetailer) {
      return (
        <>
          <S.RetailerPriceCard>
            <S.RetailerPriceItem>
              <S.RetailerPriceLabel>
                {PRODUCTS_CONFIG.buyingPriceLabel}
              </S.RetailerPriceLabel>
              <S.RetailerPriceValue>
                ₹ {Number(product?.price ?? 0).toFixed(2)}
              </S.RetailerPriceValue>
            </S.RetailerPriceItem>
            <S.RetailerPriceDivider />
            <S.RetailerPriceItem>
              <S.RetailerPriceLabel>
                {PRODUCTS_CONFIG.sellingPriceLabel}
              </S.RetailerPriceLabel>
              <S.RetailerPriceValue $isSellingPrice>
                ₹ {Number(product?.sellingPrice ?? 0).toFixed(2)}
              </S.RetailerPriceValue>
            </S.RetailerPriceItem>
          </S.RetailerPriceCard>
          <S.ButtonContainer>
            <S.Button
              $bgColor={theme.colors.primary}
              $canAdd
              onClick={() => setModal(true)}
            >
              <S.EditIcon />
              {PRODUCTS_CONFIG.editButton}
            </S.Button>
            <S.Button
              $bgColor={theme.colors.red}
              $canAdd
              onClick={() =>
                showAlert({
                  title: PRODUCTS_CONFIG.deleteProductTitle,
                  subtitle: PRODUCTS_CONFIG.deleteProductSubtitle,
                  type: "warning",
                  confirmButtonText: PRODUCTS_CONFIG.confirmDeleteButton,
                  cancelButtonText: PRODUCTS_CONFIG.cancelDeleteButton,
                  onConfirmedPress: () => {
                    void _deleteProduct();
                  },
                })
              }
            >
              <S.DeleteIcon />
              {PRODUCTS_CONFIG.deleteButton}
            </S.Button>
          </S.ButtonContainer>
        </>
      );
    }

    const isOutOfStock = product?.quantity <= PRODUCTS_CONFIG.threshold;

    return (
      <S.ButtonContainer>
        <S.Button
          $bgColor={theme.colors.primary}
          disabled={isAvailableInCart || isOutOfStock}
          onClick={!isAvailableInCart && !isOutOfStock ? itemAdded : undefined}
          $canAdd={!isOutOfStock && !isAvailableInCart}
        >
          <S.CartIcon />
          {isOutOfStock
            ? PRODUCTS_CONFIG.outOfStock
            : isAvailableInCart
              ? PRODUCTS_CONFIG.addedToCart
              : PRODUCTS_CONFIG.addToCartButton}
        </S.Button>
      </S.ButtonContainer>
    );
  };

  return (
    <div>
      <S.CardContainer>
        {_renderCardInitialDetails()}
        {_renderButton()}
      </S.CardContainer>

      <EditItemModal
        modalShow={modal}
        onClose={() => setModal(false)}
        product={product}
        categories={categories}
        updateProduct={updateProduct}
      />
    </div>
  );
};
