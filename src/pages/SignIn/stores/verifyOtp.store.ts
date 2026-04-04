/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import VerifyOtpService from "../services";
import { verifyOTPParams } from "../services/rest";

type State = {
  verifyOtpLoading: boolean;
  verifyOtpResponse: any | null;
  verifyOtpError: string | null;
  fetchVerifyOtp: (params: verifyOTPParams) => Promise<void>;
  resetVerifyOtp: () => void;
};

export const useVerifyOtpStore = create<State>((set) => ({
  verifyOtpLoading: false,
  verifyOtpResponse: null,
  verifyOtpError: null,

  fetchVerifyOtp: async (params: verifyOTPParams) => {
    try {
      set({ verifyOtpLoading: true, verifyOtpError: null });
      const res = await VerifyOtpService.verifyOtpAPI(params);
      set({ verifyOtpResponse: res });
    } catch (err: any) {
      set({
        verifyOtpError: err?.message,
      });
    } finally {
      set({ verifyOtpLoading: false });
    }
  },

  resetVerifyOtp: () => {
    set({
      verifyOtpLoading: false,
      verifyOtpResponse: null,
      verifyOtpError: null,
    });
  },
}));
