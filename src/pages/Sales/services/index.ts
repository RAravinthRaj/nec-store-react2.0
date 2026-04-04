/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import {
  GetSalesInput,
  getSales,
  GetSalesReportInput,
  getSalesReport,
  GetIncomingStockInput,
  getIncomingStock,
  GetIncomingStockReportInput,
  getIncomingStockReport,
} from "./graphql";

class SalesService {
  private static instance: SalesService;

  private constructor() {}

  static getInstance(): SalesService {
    if (!SalesService.instance) {
      SalesService.instance = new SalesService();
    }
    return SalesService.instance;
  }

  async getSalesAPI(args: GetSalesInput): Promise<any> {
    const res = await getSales(args);
    return res;
  }

  async getSalesReportAPI(args: GetSalesReportInput): Promise<any> {
    const res = await getSalesReport(args);
    return res;
  }

  async getIncomingStockAPI(args: GetIncomingStockInput): Promise<any> {
    const res = await getIncomingStock(args);
    return res;
  }

  async getIncomingStockReportAPI(
    args: GetIncomingStockReportInput,
  ): Promise<any> {
    const res = await getIncomingStockReport(args);
    return res;
  }
}

export default SalesService.getInstance();
