/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { UPDATE_PRODUCT } from "./mutations/updateProduct.mutation";

export interface UpdateProductInput {
  id: string;
  title?: string;
  categoryId?: string;
  quantity?: number;
  buyingPrice?: number;
  sellingPrice?: number;
  productImage?: string;
  isDeleted?: boolean;
}

export const UpdateProduct = async (args: UpdateProductInput) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: UPDATE_PRODUCT,
      variables: {
        input: args,
      },
    });

    return {
      payload: {
        data: data?.updateProduct?.message,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while updating the Product.";

    console.error("Error in UpdateProduct: ", msg);
    throw new Error(msg);
  }
};
