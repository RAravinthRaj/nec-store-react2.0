/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import {
  addCategory,
  addProduct,
  AddProductInput,
  addStock,
  AddStockInput,
  deleteProduct,
  getAllCategories,
  UpdateProduct,
  UpdateProductInput,
} from "./graphql";
import { GetAllProductsInput, getAllProducts } from "./graphql";
import { addRecent, AddRecentInput } from "./graphql/addRecent.graphql";
import { DeleteProductInput } from "./graphql/deleteProduct.graphql";

class ProductsService {
  private static instance: ProductsService;

  private constructor() {}

  static getInstance(): ProductsService {
    if (!ProductsService.instance) {
      ProductsService.instance = new ProductsService();
    }
    return ProductsService.instance;
  }

  async getAllCategoriesAPI(): Promise<any> {
    const res = await getAllCategories();
    return res;
  }

  async addCategoryAPI(name: string): Promise<any> {
    const res = await addCategory(name);
    return res;
  }

  async getAllProductsAPI(args: GetAllProductsInput): Promise<any> {
    const res = await getAllProducts(args);
    return res;
  }

  async addProductAPI(args: AddProductInput): Promise<any> {
    const res = await addProduct(args);
    return res;
  }

  async updateProductAPI(args: UpdateProductInput): Promise<any> {
    const res = await UpdateProduct(args);
    return res;
  }

  async addRecentAPI(args: AddRecentInput): Promise<any> {
    const res = await addRecent(args);
    return res;
  }

  async addStockAPI(args: AddStockInput): Promise<any> {
    const res = await addStock(args);
    return res;
  }

  async deleteProductAPI(args: DeleteProductInput): Promise<any> {
    const res = await deleteProduct(args);
    return res;
  }
}

export default ProductsService.getInstance();
