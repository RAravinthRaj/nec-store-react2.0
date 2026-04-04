/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { ADD_RECENT } from "./mutations/addRecent.mutation";

export interface AddRecentInput {
  userId: string;
  productId: string;
}

export const addRecent = async (args: AddRecentInput) => {
  try {
    const { userId, productId } = args;

    const { data } = await apolloClient.mutate({
      mutation: ADD_RECENT,
      variables: { userId, productId },
    });

    return { payload: { data: data?.addRecent } };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while adding to recents.";
    console.error("Error in addRecent: ", msg);
    throw new Error(msg);
  }
};
