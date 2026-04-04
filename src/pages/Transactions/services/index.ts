import {
  GetTransactionsInput,
  getTransactions,
  GetTransactionsReportInput,
  getTransactionsReport,
} from "./graphql";

class TransactionsService {
  private static instance: TransactionsService;

  private constructor() {}

  static getInstance(): TransactionsService {
    if (!TransactionsService.instance) {
      TransactionsService.instance = new TransactionsService();
    }
    return TransactionsService.instance;
  }

  async getTransactionsAPI(args: GetTransactionsInput): Promise<any> {
    const res = await getTransactions(args);
    return res;
  }

  async getTransactionsReportAPI(
    args: GetTransactionsReportInput,
  ): Promise<any> {
    const res = await getTransactionsReport(args);
    return res;
  }
}

export default TransactionsService.getInstance();
