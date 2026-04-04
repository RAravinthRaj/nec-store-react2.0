import { create } from "zustand";
import TransactionsService from "../services";
import { GetTransactionsInput } from "../services/graphql";

type State = {
  getTransactionsLoading: boolean;
  getTransactionsResponse: any | null;
  getTransactionsError: string | null;
  fetchGetTransactions: (args: GetTransactionsInput) => Promise<void>;
  resetGetTransactions: () => void;
};

export const useGetTransactionsStore = create<State>((set) => ({
  getTransactionsLoading: false,
  getTransactionsResponse: null,
  getTransactionsError: null,

  fetchGetTransactions: async (args: GetTransactionsInput) => {
    try {
      set({ getTransactionsLoading: true, getTransactionsError: null });
      const res = await TransactionsService.getTransactionsAPI(args);
      set({ getTransactionsResponse: res });
    } catch (err: any) {
      set({ getTransactionsError: err?.message });
    } finally {
      set({ getTransactionsLoading: false });
    }
  },

  resetGetTransactions: () => {
    set({
      getTransactionsLoading: false,
      getTransactionsResponse: null,
      getTransactionsError: null,
    });
  },
}));
