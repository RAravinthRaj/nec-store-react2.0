/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import {
  getAllOrders,
  GetAllOrdersInput,
  cancelOrder,
  updateOrder,
} from "./graphql";

class OrdersService {
  private static instance: OrdersService;

  private constructor() {}

  static getInstance(): OrdersService {
    if (!OrdersService.instance) {
      OrdersService.instance = new OrdersService();
    }
    return OrdersService.instance;
  }

  async getAllOrdersAPI(args: GetAllOrdersInput): Promise<any> {
    const res = await getAllOrders(args);
    return res;
  }

  async cancelOrderAPI(orderId: string): Promise<any> {
    const res = await cancelOrder(orderId);
    return res;
  }

  async updateOrderAPI(
    orderId: string,
    paidStatus?: string,
    deliveryStatus?: string
  ): Promise<any> {
    const res = await updateOrder(orderId, paidStatus, deliveryStatus);
    return res;
  }
}

export default OrdersService.getInstance();
