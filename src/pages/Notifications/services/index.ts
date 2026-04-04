/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { getAllNotifications } from "./graphql/getNotifications.graphql";
import { markNotificationAsRead } from "./graphql/markNotification.graphql";

class NotificationService {
  private static instance: NotificationService;

  private constructor() {}

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  async getAllNotifications(): Promise<any> {
    return await getAllNotifications();
  }

  async markAsRead(id: string): Promise<any> {
    return await markNotificationAsRead(id);
  }
}

export default NotificationService.getInstance();
