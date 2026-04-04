/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import ProductsService from "../services";
import { UpdateProductInput } from "../services/graphql";

type State = {
  updateProductLoading: boolean;
  updateProductResponse: any | null;
  updateProductError: string | null;
  fetchUpdateProduct: (args: UpdateProductInput) => Promise<boolean>;
  resetUpdateProduct: () => void;
};

export const useUpdateProductStore = create<State>((set) => ({
  updateProductLoading: false,
  updateProductResponse: null,
  updateProductError: null,

  fetchUpdateProduct: async (args: UpdateProductInput) => {
    try {
      set({ updateProductLoading: true, updateProductError: null });
      const res = await ProductsService.updateProductAPI(args);
      set({ updateProductResponse: res });

      return true;
    } catch (err: any) {
      set({ updateProductError: err?.message });

      return false;
    } finally {
      set({ updateProductLoading: false });
    }
  },

  resetUpdateProduct: () => {
    set({
      updateProductLoading: false,
      updateProductResponse: null,
      updateProductError: null,
    });
  },
}));
