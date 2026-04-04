/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import ProductsService from "../services";
import { AddRecentInput } from "../services/graphql";

type State = {
  addRecentLoading: boolean;
  addRecentResponse: any | null;
  addRecentError: string | null;
  fetchAddRecent: (args: AddRecentInput) => Promise<boolean>;
  resetAddRecent: () => void;
};

export const useAddRecentStore = create<State>((set) => ({
  addRecentLoading: false,
  addRecentResponse: null,
  addRecentError: null,

  fetchAddRecent: async (args: AddRecentInput) => {
    try {
      set({ addRecentLoading: true, addRecentError: null });
      const res = await ProductsService.addRecentAPI(args);
      set({ addRecentResponse: res });

      return true;
    } catch (err: any) {
      set({ addRecentError: err?.message });

      return false;
    } finally {
      set({ addRecentLoading: false });
    }
  },

  resetAddRecent: () => {
    set({
      addRecentLoading: false,
      addRecentResponse: null,
      addRecentError: null,
    });
  },
}));
