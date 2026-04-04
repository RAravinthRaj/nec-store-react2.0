/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import SignUpService from "../services";
import { CreateUserParams } from "../services/rest";

type State = {
  createUserLoading: boolean;
  createUserResponse: string | null;
  createUserError: string | null;
  fetchCreateUser: (params: CreateUserParams) => Promise<void>;
  resetCreateUser: () => void;
};

export const useCreateUserStore = create<State>((set) => ({
  createUserLoading: false,
  createUserResponse: null,
  createUserError: null,

  fetchCreateUser: async (params: CreateUserParams) => {
    try {
      set({ createUserLoading: true, createUserError: null });
      const res = await SignUpService.createUserAPI(params);
      set({ createUserResponse: res });
    } catch (err: any) {
      set({
        createUserError: err?.message,
      });
    } finally {
      set({ createUserLoading: false });
    }
  },

  resetCreateUser: () => {
    set({
      createUserLoading: false,
      createUserResponse: null,
      createUserError: null,
    });
  },
}));
