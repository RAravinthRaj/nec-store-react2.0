/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { ADD_STOCK } from "./mutations/addStock.mutation";

export interface AddStockInput {
  id: string;
  quantity: number;
  buyingPrice: number;
}

export const addStock = async (args: AddStockInput) => {
  try {
    const { id, quantity, buyingPrice } = args;

    const { data } = await apolloClient.mutate({
      mutation: ADD_STOCK,
      variables: {
        input: {
          id,
          quantity,
          buyingPrice,
        },
      },
    });

    return {
      payload: {
        data: data?.addStock,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while adding the Stock.";

    console.error("Error in addStock: ", msg);
    throw new Error(msg);
  }
};
