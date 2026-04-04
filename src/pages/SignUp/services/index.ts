/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { createUser, CreateUserParams } from "./rest";

class SignUpService {
  private static instance: SignUpService;

  private constructor() {}

  static getInstance(): SignUpService {
    if (!SignUpService.instance) {
      SignUpService.instance = new SignUpService();
    }
    return SignUpService.instance;
  }

  async createUserAPI(args: CreateUserParams): Promise<any> {
    const res = await createUser(args);
    return res;
  }
}

export default SignUpService.getInstance();
