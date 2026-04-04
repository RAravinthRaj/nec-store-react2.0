/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { GET_ALL_CATEGORIES } from "./queries/getAllCategory.query";

export const getAllCategories = async () => {
  try {
    const { data } = await apolloClient.query({
      query: GET_ALL_CATEGORIES,
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        categories: formatData(data?.getAllCategories),
      },
    };
  } catch (err: any) {
    let msg =
      getGraphqlError(err) ||
      "An error occurred while fetching all categories.";

    console.error("Error in getAllCategories: ", msg);
    throw new Error(msg);
  }
};

const formatData = (categories: any[]) => {
  let categoryList: any = [];

  if (categories && categories.length > 0) {
    for (let category of categories) {
      let obj = {
        id: category?.id,
        name: category?.name,
      };
      categoryList.push(obj);
    }
  }

  return categoryList;
};
