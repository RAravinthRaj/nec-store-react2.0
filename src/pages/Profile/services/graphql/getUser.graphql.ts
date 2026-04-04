/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { GET_USERS } from "./queries/getUser.query";

export const getUser = async (id: string) => {
  try {
    const { data } = await apolloClient.query({
      query: GET_USERS,
      variables: { id },
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        user: data?.getUser,
      },
    };
  } catch (err: any) {
    let msg =
      getGraphqlError(err) || "An error occurred while fetching all users.";

    console.error("Error in getUsers: ", msg);
    throw new Error(msg);
  }
};
