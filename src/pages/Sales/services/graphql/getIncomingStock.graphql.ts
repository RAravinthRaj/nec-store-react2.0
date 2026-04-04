/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { GET_INCOMING_STOCK } from "./queries/getIncomingStock.query";

export interface GetIncomingStockInput {
  skip?: number;
  limit?: number;
  categoryId?: string;
  from?: string;
  to?: string;
  title?: string;
  orderBy?: string;
}

export const getIncomingStock = async (args: GetIncomingStockInput) => {
  try {
    const { data } = await apolloClient.query({
      query: GET_INCOMING_STOCK,
      variables: {
        input: args,
      },
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        items: formatData(data?.getIncomingStock?.items),
        totalCount: data?.getIncomingStock?.totalCount,
        totalAmount: data?.getIncomingStock?.totalAmount,
        totalQuantity: data?.getIncomingStock?.totalQuantityAdded,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) ||
      "An error occurred while fetching incoming stock entries.";

    console.error("Error in getIncomingStock: ", msg);
    throw new Error(msg);
  }
};

const formatData = (entries: any[] = []) => {
  return entries.map((entry: any) => ({
    productImage: entry?.product?.productImage,
    category: entry?.product?.category?.name || "-",
    title: entry?.product?.title || "-",
    buyingPrice: Number(entry?.buyingPriceAdded || 0),
    quantity: Number(entry?.quantityAdded || 0),
    total:
      Number(entry?.quantityAdded || 0) * Number(entry?.buyingPriceAdded || 0),
    updatedOn: entry?.createdAt
      ? new Date(entry.createdAt).toLocaleDateString("en-IN")
      : "-",
  }));
};
