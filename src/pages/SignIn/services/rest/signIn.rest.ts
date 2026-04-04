/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import axios from "axios";
import { config } from "../../../../config";

export interface SignInParams {
  email: string;
}

export const signIn = async (params: SignInParams): Promise<string> => {
  const { email } = params;

  if (email.trim().length === 0) {
    throw new Error("Missing required field: Email");
  }

  try {
    const res = await axios.post(`${config.restBaseURL}/signin`, params, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res?.data;
  } catch (err: any) {
    const msg =
      err?.response?.data?.message ||
      err?.message ||
      "An error occurred during sign in.";

    console.error("Error in signIn:", msg);
    throw new Error(msg);
  }
};
