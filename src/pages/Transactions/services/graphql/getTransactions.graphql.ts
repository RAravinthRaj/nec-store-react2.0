import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { GET_TRANSACTIONS } from "./queries/getTransactions.query";

export interface GetTransactionsInput {
  skip?: number;
  limit?: number;
  from?: string;
  to?: string;
  status?: string;
  search?: string;
  orderBy?: string;
}

export const getTransactions = async (args: GetTransactionsInput) => {
  try {
    const { data } = await apolloClient.query({
      query: GET_TRANSACTIONS,
      variables: {
        input: args,
      },
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        transactions: formatData(data?.getTransactions?.items),
        totalCount: data?.getTransactions?.totalCount,
        totalAmount: data?.getTransactions?.totalAmount,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) ||
      "An error occurred while fetching transactions.";

    console.error("Error in getTransactions:", msg);
    throw new Error(msg);
  }
};

const formatData = (transactions: any[]) => {
  const transactionList: any[] = [];

  if (transactions && transactions.length > 0) {
    for (const transaction of transactions) {
      transactionList.push({
        id: transaction?.id,
        razorpayPaymentId: transaction?.razorpayPaymentId || "-",
        rollNumber: transaction?.rollNumber || "-",
        orderId: transaction?.orderId || "-",
        amount: transaction?.amount || 0,
        status: transaction?.status || "-",
        transactionDate: transaction?.transactionDate || "-",
      });
    }
  }

  return transactionList;
};
