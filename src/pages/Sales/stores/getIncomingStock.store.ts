/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import SalesService from "../services";
import { GetIncomingStockInput } from "../services/graphql";

type State = {
  getIncomingStockLoading: boolean;
  getIncomingStockResponse: any | null;
  getIncomingStockError: string | null;
  fetchGetIncomingStock: (args: GetIncomingStockInput) => Promise<void>;
  resetGetIncomingStock: () => void;
};

export const useGetIncomingStockStore = create<State>((set) => ({
  getIncomingStockLoading: false,
  getIncomingStockResponse: null,
  getIncomingStockError: null,

  fetchGetIncomingStock: async (args: GetIncomingStockInput) => {
    try {
      set({ getIncomingStockLoading: true, getIncomingStockError: null });
      const res = await SalesService.getIncomingStockAPI(args);
      set({ getIncomingStockResponse: res });
    } catch (err: any) {
      set({ getIncomingStockError: err?.message });
    } finally {
      set({ getIncomingStockLoading: false });
    }
  },

  resetGetIncomingStock: () => {
    set({
      getIncomingStockLoading: false,
      getIncomingStockResponse: null,
      getIncomingStockError: null,
    });
  },
}));
