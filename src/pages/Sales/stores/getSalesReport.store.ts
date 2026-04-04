/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import SalesService from "../services";
import { GetSalesReportInput } from "../services/graphql";

type State = {
  getSalesReportLoading: boolean;
  getSalesReportResponse: any | null;
  getSalesReportError: string | null;
  fetchGetSalesReport: (args: GetSalesReportInput) => Promise<void>;
  resetGetSalesReport: () => void;
};

export const useGetSalesReportStore = create<State>((set) => ({
  getSalesReportLoading: false,
  getSalesReportResponse: null,
  getSalesReportError: null,

  fetchGetSalesReport: async (args: GetSalesReportInput) => {
    try {
      set({ getSalesReportLoading: true, getSalesReportError: null });
      const res = await SalesService.getSalesReportAPI(args);
      set({ getSalesReportResponse: res });
    } catch (err: any) {
      set({ getSalesReportError: err?.message });
    } finally {
      set({ getSalesReportLoading: false });
    }
  },

  resetGetSalesReport: () => {
    set({
      getSalesReportLoading: false,
      getSalesReportResponse: null,
      getSalesReportError: null,
    });
  },
}));
