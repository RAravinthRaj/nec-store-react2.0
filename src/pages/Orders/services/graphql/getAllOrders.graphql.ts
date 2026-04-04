/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { GET_ALL_ORDERS } from "./queries";

export interface GetAllOrdersInput {
  skip: number;
  limit: number;
  orderId?: string;
  userId?: string;
  rollNumber?: string;
  orderBy?: string;
}

interface ProductFormatted {
  slNo: number;
  productImage: string;
  title: string;
  category: string;
  quantity: number;
  price: number;
}

interface OrderFormatted {
  orderId: string;
  orderNumber: string;
  orderBy: string;
  date: string;
  totalAmount: number;
  products: ProductFormatted[];
  paidStatus: string;
  deliveryStatus: string;
  orderStatus: string;
}

interface GetAllOrdersResponse {
  getAllOrders: {
    orders: any[];
    totalCount: number;
  };
}

interface GetAllOrdersResult {
  payload: {
    orders: OrderFormatted[];
    totalCount: number;
  };
}

export const getAllOrders = async (
  args: GetAllOrdersInput,
): Promise<GetAllOrdersResult> => {
  try {
    const { data } = await apolloClient.query<GetAllOrdersResponse>({
      query: GET_ALL_ORDERS,
      variables: args,
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        orders: formatOrders(data?.getAllOrders.orders),
        totalCount: data?.getAllOrders.totalCount,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) ||
      "An error occurred while fetching all orders in History.";
    console.error("Error in getAllOrders in History:", msg);
    throw new Error(msg);
  }
};

const formatDate = (input: string | number): string => {
  const date = new Date(
    typeof input === "string" && /^\d+$/.test(input) ? parseInt(input) : input,
  );
  if (isNaN(date.getTime())) return "Invalid Date";
  return date.toLocaleDateString("en-GB").split("/").join(".");
};

const formatOrders = (orders: any[]): OrderFormatted[] => {
  if (!Array.isArray(orders)) return [];

  return orders
    .map((order) => {
      const products: ProductFormatted[] =
        order.products?.map((product: any, index: number) => ({
          slNo: index + 1,
          productImage: product?.productImage || "",
          title: product?.title || "",
          category: product?.category?.name || "",
          quantity: product?.quantity || 0,
          price: product?.price || 0,
        })) || [];

      return {
        orderId: order?.id,
        orderNumber: order?.orderId || "",
        orderBy: order?.rollNumber || "",
        date: formatDate(order?.createdAt),
        totalAmount: order?.totalAmount || 0,
        products,
        rawDate: new Date(order?.createdAt).getTime() || 0,
        paidStatus: order?.paidStatus,
        deliveryStatus: order?.deliveryStatus,
        orderStatus: order?.orderStatus,
      };
    })
    .sort((a, b) => b.rawDate - a.rawDate)
    .map(({ rawDate, ...rest }) => rest);
};
