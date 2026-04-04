/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import OrdersService from "../services";

type State = {
  cancelOrderLoading: boolean;
  cancelOrderResponse: any | null;
  cancelOrderError: string | null;
  fetchCancelOrder: (orderId: string) => Promise<void>;
  resetCancelOrder: () => void;
};

export const useCancelOrderStore = create<State>((set) => ({
  cancelOrderLoading: false,
  cancelOrderResponse: null,
  cancelOrderError: null,

  fetchCancelOrder: async (orderId: string) => {
    try {
      set({ cancelOrderLoading: true, cancelOrderError: null });
      const res = await OrdersService.cancelOrderAPI(orderId);
      set({ cancelOrderResponse: res });
    } catch (err: any) {
      set({ cancelOrderError: err?.message });
    } finally {
      set({ cancelOrderLoading: false });
    }
  },

  resetCancelOrder: () => {
    set({
      cancelOrderLoading: false,
      cancelOrderResponse: null,
      cancelOrderError: null,
    });
  },
}));
