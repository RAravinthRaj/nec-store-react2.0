/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { UPDATE_ORDER } from "./mutations/updateOrder.mutation";

export const updateOrder = async (
  orderId: string,
  paidStatus?: string,
  deliveryStatus?: string
) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: UPDATE_ORDER,
      variables: {
        input: {
          orderId,
          paidStatus,
          deliveryStatus,
        },
      },
    });

    return {
      data: data?.updateOrder?.message,
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while Updating the Order.";

    console.error("Error in updateOrder: ", msg);
    throw new Error(msg);
  }
};
