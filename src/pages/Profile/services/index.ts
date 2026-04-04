/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { getUser, updateUser, UpdateUserInput } from "./graphql";

class ProfileService {
  private static instance: ProfileService;

  private constructor() {}

  static getInstance(): ProfileService {
    if (!ProfileService.instance) {
      ProfileService.instance = new ProfileService();
    }
    return ProfileService.instance;
  }

  async getUserAPI(id: string): Promise<any> {
    const res = await getUser(id);
    return res;
  }

  async updateUserAPI(
    input: UpdateUserInput
  ): Promise<{ payload: { message: string; token: string } }> {
    const res = await updateUser(input);
    return res;
  }
}

export default ProfileService.getInstance();
