/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { GET_INCOMING_STOCK_REPORT } from "./queries/getIncomingStockReport.query";

export interface GetIncomingStockReportInput {
  from?: string;
  to?: string;
  categoryId?: string;
  title?: string;
}

export const getIncomingStockReport = async (
  args: GetIncomingStockReportInput,
) => {
  try {
    const { data } = await apolloClient.query({
      query: GET_INCOMING_STOCK_REPORT,
      variables: {
        input: args,
      },
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        message: data?.getIncomingStockReport?.message,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) ||
      "An error occurred while downloading the incoming stock report.";

    console.error("Error in getIncomingStockReport: ", msg);
    throw new Error(msg);
  }
};
