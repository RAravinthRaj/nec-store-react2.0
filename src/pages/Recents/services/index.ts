/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { getAllRecentProducts, getAllProducts } from "./graphql";
import { GetAllProductsInput } from "./graphql/getAllProducts.graphql";

class RecentProductsService {
  private static instance: RecentProductsService;

  private constructor() {}

  static getInstance(): RecentProductsService {
    if (!RecentProductsService.instance) {
      RecentProductsService.instance = new RecentProductsService();
    }
    return RecentProductsService.instance;
  }

  async getAllRecentProductsAPI(userId: string): Promise<any> {
    const res = await getAllRecentProducts(userId);
    return res;
  }

  async getAllProductsAPI(args: GetAllProductsInput): Promise<any> {
    const res = await getAllProducts(args);
    return res;
  }
}

export default RecentProductsService.getInstance();
