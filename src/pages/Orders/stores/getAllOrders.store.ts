/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import OrdersService from "../services";
import { GetAllOrdersInput } from "../services/graphql";

type State = {
  getAllOrdersLoading: boolean;
  getAllOrdersResponse: any | null;
  getAllOrdersError: string | null;
  fetchGetAllOrders: (args: GetAllOrdersInput) => Promise<void>;
  resetGetAllOrders: () => void;
};

export const useGetAllOrdersStore = create<State>((set) => ({
  getAllOrdersLoading: false,
  getAllOrdersResponse: null,
  getAllOrdersError: null,

  fetchGetAllOrders: async (args: GetAllOrdersInput) => {
    try {
      set({ getAllOrdersLoading: true, getAllOrdersError: null });
      const res = await OrdersService.getAllOrdersAPI(args);
      set({ getAllOrdersResponse: res });
    } catch (err: any) {
      set({ getAllOrdersError: err?.message });
    } finally {
      set({ getAllOrdersLoading: false });
    }
  },

  resetGetAllOrders: () => {
    set({
      getAllOrdersLoading: false,
      getAllOrdersResponse: null,
      getAllOrdersError: null,
    });
  },
}));
