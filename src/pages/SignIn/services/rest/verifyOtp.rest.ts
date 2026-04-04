/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import axios from "axios";
import { config } from "../../../../config";

export interface verifyOTPParams {
  email: string;
  otp: string;
}

export const verifyOtp = async (params: verifyOTPParams): Promise<any> => {
  const { email, otp } = params;

  if (email.trim().length === 0 || otp.trim().length === 0) {
    throw new Error("Missing required field: Email and Otp");
  }

  try {
    const res = await axios.post(`${config.restBaseURL}/verify`, params, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res?.data;
  } catch (err: any) {
    const msg =
      err?.response?.data?.error ||
      err?.message ||
      "An error occurred during sign in.";

    console.error("Error in verifyOTP.", msg);
    throw new Error(msg);
  }
};
