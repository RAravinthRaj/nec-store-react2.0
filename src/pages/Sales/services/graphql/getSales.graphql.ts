/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { GET_SALES } from "./queries/getSales.query";

export interface GetSalesInput {
  skip?: number;
  limit?: number;
  categoryId?: string;
  from?: string;
  to?: string;
  title?: string;
  orderBy?: string;
}

export const getSales = async (args: GetSalesInput) => {
  try {
    const { data } = await apolloClient.query({
      query: GET_SALES,
      variables: {
        input: args,
      },
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        sales: formatData(data?.getSales?.items),
        totalCount: data?.getSales?.totalCount,
        totalPrice: data?.getSales?.totalAmount,
        totalSold: data?.getSales?.totalSold,
      },
    };
  } catch (err: any) {
    let msg = getGraphqlError(err) || "An error occurred while fetching Sales.";

    console.error("Error in getSales: ", msg);
    throw new Error(msg);
  }
};

const formatData = (products: any[]) => {
  let productList: any = [];

  if (products && products.length > 0) {
    for (let product of products) {
      let obj = {
        productImage: product?.productImage,
        category: product?.category?.name,
        title: product?.title,
        price:
          Number(product?.sold) > 0
            ? Number(product?.totalPrice) / Number(product?.sold)
            : 0,
        sold: product?.sold,
        left: product?.left,
        total: product?.totalPrice,
      };

      productList.push(obj);
    }
  }

  return productList;
};
