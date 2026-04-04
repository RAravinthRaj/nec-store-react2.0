/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { ADD_PRODUCT } from "./mutations/addProduct.mutation";

export interface AddProductInput {
  title: string;
  categoryId: string;
  quantity?: number;
  buyingPrice?: number;
  sellingPrice?: number;
  productImage?: string;
}

export const addProduct = async (args: AddProductInput) => {
  try {
    const {
      title,
      categoryId,
      quantity = 0,
      buyingPrice = 0,
      sellingPrice = 0,
      productImage,
    } = args;

    const { data } = await apolloClient.mutate({
      mutation: ADD_PRODUCT,
      variables: {
        title,
        categoryId,
        quantity,
        buyingPrice,
        sellingPrice,
        productImage,
      },
    });

    return {
      payload: {
        data: data?.addProduct,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while adding the Product.";

    console.error("Error in addProduct: ", msg);
    throw new Error(msg);
  }
};
