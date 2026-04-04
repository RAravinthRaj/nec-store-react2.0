/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import ProductsService from "../services";
import { DeleteProductInput } from "../services/graphql/deleteProduct.graphql";

type State = {
  deleteProductLoading: boolean;
  deleteProductResponse: any | null;
  deleteProductError: string | null;
  fetchDeleteProduct: (args: DeleteProductInput) => Promise<boolean>;
  resetDeleteProduct: () => void;
};

export const useDeleteProductStore = create<State>((set) => ({
  deleteProductLoading: false,
  deleteProductResponse: null,
  deleteProductError: null,

  fetchDeleteProduct: async (args: DeleteProductInput) => {
    try {
      set({ deleteProductLoading: true, deleteProductError: null });
      const res = await ProductsService.deleteProductAPI(args);
      set({ deleteProductResponse: res });

      return true;
    } catch (err: any) {
      set({ deleteProductError: err?.message });

      return false;
    } finally {
      set({ deleteProductLoading: false });
    }
  },

  resetDeleteProduct: () => {
    set({
      deleteProductLoading: false,
      deleteProductResponse: null,
      deleteProductError: null,
    });
  },
}));
