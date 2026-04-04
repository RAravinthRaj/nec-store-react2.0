/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import axios from "axios";
import { config } from "../../../../config";

export interface CreateUserParams {
  email: string;
  rollNumber: string;
  name: string;
  department: string;
}

export const createUser = async (params: CreateUserParams): Promise<string> => {
  const missingFields = Object.entries(params).filter(
    ([_, value]) => typeof value !== "string" || value.trim() === ""
  );

  if (missingFields.length > 0) {
    const missingKeys = missingFields.map(([key]) => key).join(", ");
    throw new Error(`Missing required fields: ${missingKeys}`);
  }

  try {
    const res = await axios.post(`${config.restBaseURL}/signup`, params, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res?.data;
  } catch (err: any) {
    const msg =
      err?.response?.data?.error || "An error occurred while creating user.";

    console.error("Error in createUser:", msg);
    throw new Error(msg);
  }
};
