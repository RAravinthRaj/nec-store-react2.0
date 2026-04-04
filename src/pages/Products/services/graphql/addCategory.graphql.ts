/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { ADD_CATEGORY } from "./mutations/addCategory.mutation";

export const addCategory = async (name: string) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: ADD_CATEGORY,
      variables: {
        name,
      },
    });

    return {
      payload: {
        data: data?.addCategory,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while adding the Category.";

    console.error("Error in addCategory: ", msg);
    throw new Error(msg);
  }
};
