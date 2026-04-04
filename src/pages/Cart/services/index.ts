/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import {
  GetAllProductsInput,
  getAllProducts,
  createOrderInput,
  createOrder,
  CheckoutProductInput,
  VerifyRazorpayPaymentInput,
  RecordPaymentTransactionInput,
  createRazorpayOrder,
  recordPaymentTransaction,
  verifyRazorpayPayment,
} from "./graphql";

class CartsService {
  private static instance: CartsService;

  private constructor() {}

  static getInstance(): CartsService {
    if (!CartsService.instance) {
      CartsService.instance = new CartsService();
    }
    return CartsService.instance;
  }

  async getAllProductsAPI(args: GetAllProductsInput): Promise<any> {
    const res = await getAllProducts(args);
    return res;
  }

  async createOrdersAPI(args: createOrderInput[]): Promise<any> {
    const res = await createOrder(args);
    return res;
  }

  async createRazorpayOrderAPI(args: CheckoutProductInput[]): Promise<any> {
    const res = await createRazorpayOrder(args);
    return res;
  }

  async verifyRazorpayPaymentAPI(
    input: VerifyRazorpayPaymentInput,
  ): Promise<any> {
    const res = await verifyRazorpayPayment(input);
    return res;
  }

  async recordPaymentTransactionAPI(
    input: RecordPaymentTransactionInput,
  ): Promise<any> {
    const res = await recordPaymentTransaction(input);
    return res;
  }
}

export default CartsService.getInstance();
