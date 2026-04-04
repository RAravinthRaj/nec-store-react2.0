/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import SignInService from "../services";
import { SignInParams } from "../services/rest";

type State = {
  signInLoading: boolean;
  signInResponse: string | null;
  signInError: string | null;
  fetchSignIn: (params: SignInParams) => Promise<void>;
  resetSignIn: () => void;
};

export const useSignInStore = create<State>((set) => ({
  signInLoading: false,
  signInResponse: null,
  signInError: null,

  fetchSignIn: async (params: SignInParams) => {
    try {
      set({ signInLoading: true, signInError: null });
      const res = await SignInService.signInAPI(params);
      set({ signInResponse: res });
    } catch (err: any) {
      set({ signInError: err?.message });
    } finally {
      set({ signInLoading: false });
    }
  },

  resetSignIn: () => {
    set({ signInLoading: false, signInResponse: null, signInError: null });
  },
}));
