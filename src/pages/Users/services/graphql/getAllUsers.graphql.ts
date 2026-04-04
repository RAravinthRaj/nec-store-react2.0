/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { GET_ALL_USERS } from "./queries/getAllUsers.query";

export interface GetAllUsersInput {
  name?: string;
  email?: string;
  skip?: number;
  limit?: number;
  orderBy?: string;
}

export const getAllUsers = async (args: GetAllUsersInput) => {
  try {
    const { data } = await apolloClient.query({
      query: GET_ALL_USERS,
      variables: args,
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        users: formatData(data?.getAllUsers),
        totalCount: data?.getAllUsers?.totalCount,
      },
    };
  } catch (err: any) {
    let msg =
      getGraphqlError(err) || "An error occurred while fetching all users.";

    console.error("Error in getAllUsers: ", msg);
    throw new Error(msg);
  }
};

const formatData = ({ users }: any) => {
  let usersList: any = [];

  if (users && users.length > 0) {
    for (let user of users) {
      let obj = {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        roles: user?.roles,
      };
      usersList.push(obj);
    }
  }

  return usersList;
};
