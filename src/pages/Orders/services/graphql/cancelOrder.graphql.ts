/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { CANCEL_ORDER } from "./mutations/cancelOrder.mutation";

export const cancelOrder = async (orderId: string) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: CANCEL_ORDER,
      variables: {
        orderId,
      },
    });

    return {
      data: data?.cancelOrder?.message,
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while Canceling the Order.";

    console.error("Error in cancelOrder: ", msg);
    throw new Error(msg);
  }
};
