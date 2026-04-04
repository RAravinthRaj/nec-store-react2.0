import { gql } from "@apollo/client";

export const GET_TRANSACTIONS_REPORT = gql`
  mutation GetTransactionsReport($input: GetTransactionsReportInput) {
    getTransactionsReport(input: $input) {
      message
    }
  }
`;
