/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { MARK_AS_READ } from "../graphql/mutations/markAsRead.mutation";
import { getGraphqlError } from "../../../../utils";

export const markNotificationAsRead = async (id: string) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: MARK_AS_READ,
      variables: { id },
    });

    return {
      payload: data?.markNotificationRead,
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) ||
      "An error occurred while marking notification as read";
    console.error("Error in markNotificationAsRead: ", msg);
    throw new Error(msg);
  }
};
