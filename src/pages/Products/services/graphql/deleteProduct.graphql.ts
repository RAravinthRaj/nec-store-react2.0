/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { DELETE_PRODUCT } from "./mutations/deleteProduct.mutation";

export interface DeleteProductInput {
  id: string;
}

export const deleteProduct = async (args: DeleteProductInput) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: DELETE_PRODUCT,
      variables: {
        input: args,
      },
    });

    return {
      payload: {
        data: data?.deleteProduct?.message,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while deleting the Product.";

    console.error("Error in deleteProduct: ", msg);
    throw new Error(msg);
  }
};
