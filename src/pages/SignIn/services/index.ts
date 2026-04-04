/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { signIn, SignInParams } from "./rest";
import { verifyOtp, verifyOTPParams } from "./rest";

class SignInService {
  private static instance: SignInService;

  private constructor() {}

  static getInstance(): SignInService {
    if (!SignInService.instance) {
      SignInService.instance = new SignInService();
    }
    return SignInService.instance;
  }

  async signInAPI(args: SignInParams): Promise<any> {
    const res = await signIn(args);
    return res;
  }

  async verifyOtpAPI(args: verifyOTPParams): Promise<any> {
    const res = await verifyOtp(args);
    return res;
  }
}

export default SignInService.getInstance();
