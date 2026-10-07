import { useState } from "react";

import notificationsData from "../data/notificationsData";

const useNotifications = () => {
  const [notifications, setNotifications] =
    useState(notificationsData);

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      }))
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearNotifications,
  };
};

export default useNotifications;