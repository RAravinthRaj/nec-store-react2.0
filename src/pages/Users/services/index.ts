/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { getAllUsers, GetAllUsersInput } from "./graphql";

class UsersService {
  private static instance: UsersService;

  private constructor() {}

  static getInstance(): UsersService {
    if (!UsersService.instance) {
      UsersService.instance = new UsersService();
    }
    return UsersService.instance;
  }

  async getAllUsersAPI(args: GetAllUsersInput): Promise<any> {
    const res = await getAllUsers(args);
    return res;
  }
}

export default UsersService.getInstance();
