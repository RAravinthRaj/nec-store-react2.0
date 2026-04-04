/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import ProfileService from "../services";

type State = {
  getUserLoading: boolean;
  getUserResponse: any | null;
  getUserError: string | null;
  fetchGetUser: (id: string) => Promise<void>;
  resetGetUser: () => void;
};

export const useGetUserStore = create<State>((set) => ({
  getUserLoading: false,
  getUserResponse: null,
  getUserError: null,

  fetchGetUser: async (id: string) => {
    try {
      set({ getUserLoading: true, getUserError: null });
      const res = await ProfileService.getUserAPI(id);
      set({ getUserResponse: res });
    } catch (err: any) {
      set({ getUserError: err?.message });
    } finally {
      set({ getUserLoading: false });
    }
  },

  resetGetUser: () => {
    set({
      getUserLoading: false,
      getUserResponse: null,
      getUserError: null,
    });
  },
}));
