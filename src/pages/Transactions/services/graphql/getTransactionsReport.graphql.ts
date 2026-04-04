import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { GET_TRANSACTIONS_REPORT } from "./queries/getTransactionsReport.query";

export interface GetTransactionsReportInput {
  from?: string;
  to?: string;
  status?: string;
  search?: string;
}

export const getTransactionsReport = async (
  args: GetTransactionsReportInput,
) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: GET_TRANSACTIONS_REPORT,
      variables: {
        input: args,
      },
    });

    return {
      payload: {
        message: data?.getTransactionsReport?.message,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) ||
      "An error occurred while downloading the transactions report.";

    console.error("Error in getTransactionsReport:", msg);
    throw new Error(msg);
  }
};
