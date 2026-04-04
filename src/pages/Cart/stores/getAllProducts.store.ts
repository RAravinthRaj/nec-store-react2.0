/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import CartsService from "../services";
import { GetAllProductsInput } from "../services/graphql";

type State = {
  getAllProductsLoading: boolean;
  getAllProductsResponse: any | null;
  getAllProductsError: string | null;
  fetchGetAllProducts: (args: GetAllProductsInput) => Promise<void>;
  resetGetAllProducts: () => void;
};

export const useGetAllProductsStore = create<State>((set) => ({
  getAllProductsLoading: false,
  getAllProductsResponse: null,
  getAllProductsError: null,

  fetchGetAllProducts: async (args: GetAllProductsInput) => {
    try {
      set({ getAllProductsLoading: true, getAllProductsError: null });
      const res = await CartsService.getAllProductsAPI(args);
      set({ getAllProductsResponse: res });
    } catch (err: any) {
      set({ getAllProductsError: err?.message });
    } finally {
      set({ getAllProductsLoading: false });
    }
  },

  resetGetAllProducts: () => {
    set({
      getAllProductsLoading: false,
      getAllProductsResponse: null,
      getAllProductsError: null,
    });
  },
}));
