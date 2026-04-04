/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import ProductsService from "../services";

type State = {
  getAllRecentProductsLoading: boolean;
  getAllRecentProductsResponse: any | null;
  getAllRecentProductsError: string | null;
  fetchGetAllRecentProducts: (userId: string) => Promise<void>;
  resetGetAllRecentProducts: () => void;
};

export const useGetAllRecentProductsStore = create<State>((set) => ({
  getAllRecentProductsLoading: false,
  getAllRecentProductsResponse: null,
  getAllRecentProductsError: null,

  fetchGetAllRecentProducts: async (userId: string) => {
    try {
      set({
        getAllRecentProductsLoading: true,
        getAllRecentProductsError: null,
      });
      const res = await ProductsService.getAllRecentProductsAPI(userId);
      set({ getAllRecentProductsResponse: res });
    } catch (err: any) {
      set({ getAllRecentProductsError: err?.message });
    } finally {
      set({ getAllRecentProductsLoading: false });
    }
  },

  resetGetAllRecentProducts: () => {
    set({
      getAllRecentProductsLoading: false,
      getAllRecentProductsResponse: null,
      getAllRecentProductsError: null,
    });
  },
}));
