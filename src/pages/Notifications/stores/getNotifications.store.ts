/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import NotificationService from "../services";

type State = {
  getNotificationsLoading: boolean;
  getNotificationsResponse: any[] | null;
  getNotificationsError: string | null;
  fetchGetNotifications: () => Promise<void>;
  resetGetNotifications: () => void;
};

export const useGetNotificationsStore = create<State>((set) => ({
  getNotificationsLoading: false,
  getNotificationsResponse: null,
  getNotificationsError: null,

  fetchGetNotifications: async () => {
    try {
      set({ getNotificationsLoading: true, getNotificationsError: null });
      const res = await NotificationService.getAllNotifications();
      set({ getNotificationsResponse: res });
    } catch (err: any) {
      set({ getNotificationsError: err?.message });
    } finally {
      set({ getNotificationsLoading: false });
    }
  },

  resetGetNotifications: () => {
    set({
      getNotificationsLoading: false,
      getNotificationsResponse: null,
      getNotificationsError: null,
    });
  },
}));
