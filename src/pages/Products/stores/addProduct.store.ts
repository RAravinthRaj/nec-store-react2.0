/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import ProductsService from "../services";
import { AddProductInput } from "../services/graphql";

type State = {
  addProductLoading: boolean;
  addProductResponse: any | null;
  addProductError: string | null;
  fetchAddProduct: (args: AddProductInput) => Promise<boolean>;
  resetAddProduct: () => void;
};

export const useAddProductStore = create<State>((set) => ({
  addProductLoading: false,
  addProductResponse: null,
  addProductError: null,

  fetchAddProduct: async (args: AddProductInput) => {
    try {
      set({ addProductLoading: true, addProductError: null });
      const res = await ProductsService.addProductAPI(args);
      set({ addProductResponse: res });

      return true;
    } catch (err: any) {
      set({ addProductError: err?.message });

      return false;
    } finally {
      set({ addProductLoading: false });
    }
  },

  resetAddProduct: () => {
    set({
      addProductLoading: false,
      addProductResponse: null,
      addProductError: null,
    });
  },
}));
