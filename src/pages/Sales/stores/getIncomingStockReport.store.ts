/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import SalesService from "../services";
import { GetIncomingStockReportInput } from "../services/graphql";

type State = {
  getIncomingStockReportLoading: boolean;
  getIncomingStockReportResponse: any | null;
  getIncomingStockReportError: string | null;
  fetchGetIncomingStockReport: (
    args: GetIncomingStockReportInput,
  ) => Promise<void>;
  resetGetIncomingStockReport: () => void;
};

export const useGetIncomingStockReportStore = create<State>((set) => ({
  getIncomingStockReportLoading: false,
  getIncomingStockReportResponse: null,
  getIncomingStockReportError: null,

  fetchGetIncomingStockReport: async (args: GetIncomingStockReportInput) => {
    try {
      set({
        getIncomingStockReportLoading: true,
        getIncomingStockReportError: null,
      });
      const res = await SalesService.getIncomingStockReportAPI(args);
      set({ getIncomingStockReportResponse: res });
    } catch (err: any) {
      set({ getIncomingStockReportError: err?.message });
    } finally {
      set({ getIncomingStockReportLoading: false });
    }
  },

  resetGetIncomingStockReport: () => {
    set({
      getIncomingStockReportLoading: false,
      getIncomingStockReportResponse: null,
      getIncomingStockReportError: null,
    });
  },
}));
