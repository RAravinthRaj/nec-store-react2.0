/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import * as S from "./styles";
import { ProductCard } from "../ProductCard";
import {
  AddRecentInput,
  DeleteProductInput,
  UpdateProductInput,
} from "../../services/graphql";

export interface IProductContainer {
  categories: any[];
  products: any[];
  isRetailer: boolean;
  updateProduct(args: UpdateProductInput): Promise<boolean>;
  deleteProduct(args: DeleteProductInput): Promise<boolean>;
  addRecent(args: AddRecentInput): Promise<boolean>;
  mode?: "products" | "stock";
  onAddStockClick?: (product: any) => void;
}

export const ProductContainer = ({
  products,
  categories,
  updateProduct,
  deleteProduct,
  isRetailer,
  addRecent,
  mode = "products",
  onAddStockClick,
}: IProductContainer) => {
  return (
    <S.Wrapper>
      <S.ProductContainer $isRetailer={isRetailer}>
        {products.map((product, id) => (
          <ProductCard
            key={id}
            product={product}
            categories={categories}
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
            isRetailer={isRetailer}
            addRecent={addRecent}
            mode={mode}
            onAddStockClick={onAddStockClick}
          />
        ))}
      </S.ProductContainer>
    </S.Wrapper>
  );
};
