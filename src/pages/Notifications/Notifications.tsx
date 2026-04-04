/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import NotificationComp from "./components/ContainerComp";
import { useGetNotificationsStore } from "./stores/getNotifications.store";
import { useMarkNotificationReadStore } from "./stores/markAsRead.store";

interface NotificationItem {
  _id: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

const Notifications = () => {
  const { getNotificationsResponse, fetchGetNotifications } =
    useGetNotificationsStore();

  const { markNotificationRead } = useMarkNotificationReadStore();

  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    fetchGetNotifications();
  }, [fetchGetNotifications]);

  useEffect(() => {
    if (
      getNotificationsResponse?.payload &&
      Array.isArray(getNotificationsResponse.payload)
    ) {
      setNotifications(getNotificationsResponse.payload);
    }
  }, [getNotificationsResponse]);

  const handleMarkAsRead = async (id: string) => {
    await markNotificationRead(id);
    setNotifications((prev) =>
      prev.map((item) => (item._id === id ? { ...item, isRead: true } : item))
    );
  };

  return (
    <NotificationComp
      notifications={notifications}
      onMarkAsRead={handleMarkAsRead}
    />
  );
};

export default Notifications;
