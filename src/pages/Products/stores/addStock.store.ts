/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import ProductsService from "../services";
import { AddStockInput } from "../services/graphql";

type State = {
  addStockLoading: boolean;
  addStockResponse: any | null;
  addStockError: string | null;
  fetchAddStock: (input: AddStockInput) => Promise<boolean>;
  resetAddStock: () => void;
};

export const useAddStockStore = create<State>((set) => ({
  addStockLoading: false,
  addStockResponse: null,
  addStockError: null,

  fetchAddStock: async (input: AddStockInput) => {
    try {
      set({ addStockLoading: true, addStockError: null });
      const res = await ProductsService.addStockAPI(input);
      set({ addStockResponse: res });

      return true;
    } catch (err: any) {
      set({ addStockError: err?.message });

      return false;
    } finally {
      set({ addStockLoading: false });
    }
  },

  resetAddStock: () => {
    set({
      addStockLoading: false,
      addStockResponse: null,
      addStockError: null,
    });
  },
}));
