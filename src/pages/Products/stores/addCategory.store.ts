/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import ProductsService from "../services";

type State = {
  addCategoryLoading: boolean;
  addCategoryResponse: any | null;
  addCategoryError: string | null;
  fetchAddCategory: (name: string) => Promise<boolean>;
  resetAddCategory: () => void;
};

export const useAddCategoryStore = create<State>((set) => ({
  addCategoryLoading: false,
  addCategoryResponse: null,
  addCategoryError: null,

  fetchAddCategory: async (name: string) => {
    try {
      set({ addCategoryLoading: true, addCategoryError: null });
      const res = await ProductsService.addCategoryAPI(name);
      set({ addCategoryResponse: res });

      return true;
    } catch (err: any) {
      set({ addCategoryError: err?.message });

      return false;
    } finally {
      set({ addCategoryLoading: false });
    }
  },

  resetAddCategory: () => {
    set({
      addCategoryLoading: false,
      addCategoryResponse: null,
      addCategoryError: null,
    });
  },
}));
