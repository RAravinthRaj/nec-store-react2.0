/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import SalesService from "../services";
import { GetSalesInput } from "../services/graphql";

type State = {
  getSalesLoading: boolean;
  getSalesResponse: any | null;
  getSalesError: string | null;
  fetchGetSales: (args: GetSalesInput) => Promise<void>;
  resetGetSales: () => void;
};

export const useGetSalesStore = create<State>((set) => ({
  getSalesLoading: false,
  getSalesResponse: null,
  getSalesError: null,

  fetchGetSales: async (args: GetSalesInput) => {
    try {
      set({ getSalesLoading: true, getSalesError: null });
      const res = await SalesService.getSalesAPI(args);
      set({ getSalesResponse: res });
    } catch (err: any) {
      set({ getSalesError: err?.message });
    } finally {
      set({ getSalesLoading: false });
    }
  },

  resetGetSales: () => {
    set({
      getSalesLoading: false,
      getSalesResponse: null,
      getSalesError: null,
    });
  },
}));
