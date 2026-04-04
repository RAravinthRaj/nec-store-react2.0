/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import ProductsService from "../services";

type State = {
  getAllCategoriesLoading: boolean;
  getAllCategoriesResponse: any | null;
  getAllCategoriesError: string | null;
  fetchGetAllCategories: () => Promise<void>;
  resetGetAllCategories: () => void;
};

export const useGetAllCategoriesStore = create<State>((set) => ({
  getAllCategoriesLoading: false,
  getAllCategoriesResponse: null,
  getAllCategoriesError: null,

  fetchGetAllCategories: async () => {
    try {
      set({ getAllCategoriesLoading: true, getAllCategoriesError: null });
      const res = await ProductsService.getAllCategoriesAPI();
      set({ getAllCategoriesResponse: res });
    } catch (err: any) {
      set({ getAllCategoriesError: err?.message });
    } finally {
      set({ getAllCategoriesLoading: false });
    }
  },

  resetGetAllCategories: () => {
    set({
      getAllCategoriesLoading: false,
      getAllCategoriesResponse: null,
      getAllCategoriesError: null,
    });
  },
}));
