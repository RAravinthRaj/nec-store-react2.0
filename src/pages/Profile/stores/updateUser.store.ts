/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import ProfileService from "../services";
import { UpdateUserInput } from "../services/graphql";

type State = {
  updateUserLoading: boolean;
  updateUserResponse: any | null;
  updateUserError: string | null;
  fetchUpdateUser: (input: UpdateUserInput) => Promise<void>;
  resetUpdateUser: () => void;
};

export const useUpdateUserStore = create<State>((set) => ({
  updateUserLoading: false,
  updateUserResponse: null,
  updateUserError: null,

  fetchUpdateUser: async (input: UpdateUserInput) => {
    try {
      set({ updateUserLoading: true, updateUserError: null });
      const res = await ProfileService.updateUserAPI(input);
      set({ updateUserResponse: res });
    } catch (err: any) {
      set({ updateUserError: err?.message });
    } finally {
      set({ updateUserLoading: false });
    }
  },

  resetUpdateUser: () => {
    set({
      updateUserLoading: false,
      updateUserResponse: null,
      updateUserError: null,
    });
  },
}));
