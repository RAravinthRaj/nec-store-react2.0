/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import NotificationService from "../services";

type State = {
  markNotificationLoading: boolean;
  markNotificationResponse: any | null;
  markNotificationError: string | null;
  markNotificationRead: (id: string) => Promise<void>;
  resetMarkNotification: () => void;
};

export const useMarkNotificationReadStore = create<State>((set) => ({
  markNotificationLoading: false,
  markNotificationResponse: null,
  markNotificationError: null,

  markNotificationRead: async (id: string) => {
    try {
      set({ markNotificationLoading: true, markNotificationError: null });
      const res = await NotificationService.markAsRead(id);
      set({ markNotificationResponse: res });
    } catch (err: any) {
      set({ markNotificationError: err?.message });
    } finally {
      set({ markNotificationLoading: false });
    }
  },

  resetMarkNotification: () => {
    set({
      markNotificationLoading: false,
      markNotificationResponse: null,
      markNotificationError: null,
    });
  },
}));
