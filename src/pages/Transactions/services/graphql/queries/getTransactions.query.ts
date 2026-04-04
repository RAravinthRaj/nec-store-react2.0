import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
  query GetTransactions($input: GetTransactionsInput) {
    getTransactions(input: $input) {
      totalCount
      totalAmount
      items {
        id
        razorpayPaymentId
        rollNumber
        orderId
        amount
        status
        transactionDate
      }
    }
  }
`;
