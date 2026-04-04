/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import OrdersService from "../services";

type State = {
  updateOrderLoading: boolean;
  updateOrderResponse: any | null;
  updateOrderError: string | null;
  fetchUpdateOrder: (
    orderId: string,
    paidStatus?: string,
    deliveryStatus?: string
  ) => Promise<void>;
  resetUpdateOrder: () => void;
};

export const useUpdateOrderStore = create<State>((set) => ({
  updateOrderLoading: false,
  updateOrderResponse: null,
  updateOrderError: null,

  fetchUpdateOrder: async (
    orderId: string,
    paidStatus?: string,
    deliveryStatus?: string
  ) => {
    try {
      set({ updateOrderLoading: true, updateOrderError: null });
      const res = await OrdersService.updateOrderAPI(
        orderId,
        deliveryStatus,
        paidStatus
      );
      set({ updateOrderResponse: res });
    } catch (err: any) {
      set({ updateOrderError: err?.message });
    } finally {
      set({ updateOrderLoading: false });
    }
  },

  resetUpdateOrder: () => {
    set({
      updateOrderLoading: false,
      updateOrderResponse: null,
      updateOrderError: null,
    });
  },
}));
