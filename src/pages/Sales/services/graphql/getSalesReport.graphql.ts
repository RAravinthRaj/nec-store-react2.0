/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { GET_SALES_REPORT } from "./queries/getSalesReport.query";

export interface GetSalesReportInput {
  from?: string;
  to?: string;
  categoryId?: string;
  title?: string;
}

export const getSalesReport = async (args: GetSalesReportInput) => {
  try {
    const { data } = await apolloClient.query({
      query: GET_SALES_REPORT,
      variables: {
        input: args,
      },
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        message: data?.getSalesReport?.message,
      },
    };
  } catch (err: any) {
    let msg = getGraphqlError(err) || "An error occurred while fetching Sales.";

    console.error("Error in getSales: ", msg);
    throw new Error(msg);
  }
};
