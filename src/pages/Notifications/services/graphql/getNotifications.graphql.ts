/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { GET_NOTIFICATIONS } from "../graphql/queries/getNotifications.query";
import { getGraphqlError } from "../../../../utils";

export const getAllNotifications = async () => {
  try {
    const { data } = await apolloClient.query({
      query: GET_NOTIFICATIONS,
      fetchPolicy: "no-cache",
    });

    return {
      payload: data?.getNotifications || [],
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while fetching notifications";
    console.error("Error in getNotifications: ", msg);
    throw new Error(msg);
  }
};
