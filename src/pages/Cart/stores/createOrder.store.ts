/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import CartsService from "../services";
import { createOrderInput } from "../services/graphql";

type State = {
  createOrderLoading: boolean;
  createOrderResponse: any | null;
  createOrderError: string | null;
  fetchCreateOrder: (args: createOrderInput[]) => Promise<void>;
  resetCreateOrder: () => void;
};

export const useCreateOrdersStore = create<State>((set) => ({
  createOrderLoading: false,
  createOrderResponse: null,
  createOrderError: null,

  fetchCreateOrder: async (args: createOrderInput[]) => {
    try {
      set({ createOrderLoading: true, createOrderError: null });
      const res = await CartsService.createOrdersAPI(args);
      set({ createOrderResponse: res });
    } catch (err: any) {
      set({ createOrderError: err?.message });
    } finally {
      set({ createOrderLoading: false });
    }
  },

  resetCreateOrder: () => {
    set({
      createOrderLoading: false,
      createOrderResponse: null,
      createOrderError: null,
    });
  },
}));
