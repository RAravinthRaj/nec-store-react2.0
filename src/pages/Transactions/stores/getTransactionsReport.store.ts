import { create } from "zustand";
import TransactionsService from "../services";
import { GetTransactionsReportInput } from "../services/graphql";

type State = {
  getTransactionsReportLoading: boolean;
  getTransactionsReportResponse: any | null;
  getTransactionsReportError: string | null;
  fetchGetTransactionsReport: (
    args: GetTransactionsReportInput,
  ) => Promise<void>;
  resetGetTransactionsReport: () => void;
};

export const useGetTransactionsReportStore = create<State>((set) => ({
  getTransactionsReportLoading: false,
  getTransactionsReportResponse: null,
  getTransactionsReportError: null,

  fetchGetTransactionsReport: async (args: GetTransactionsReportInput) => {
    try {
      set({
        getTransactionsReportLoading: true,
        getTransactionsReportError: null,
      });
      const res = await TransactionsService.getTransactionsReportAPI(args);
      set({ getTransactionsReportResponse: res });
    } catch (err: any) {
      set({ getTransactionsReportError: err?.message });
    } finally {
      set({ getTransactionsReportLoading: false });
    }
  },

  resetGetTransactionsReport: () => {
    set({
      getTransactionsReportLoading: false,
      getTransactionsReportResponse: null,
      getTransactionsReportError: null,
    });
  },
}));
