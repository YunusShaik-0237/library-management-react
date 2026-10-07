import {
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

import styles from "./Notifications.module.css";

const Notifications = ({
  notifications,
  markAsRead,
}) => {
  const getIcon = (type) => {
    switch (type) {
      case "success":
        return (
          <FaCheckCircle className={styles.success} />
        );

      case "info":
        return (
          <FaInfoCircle className={styles.info} />
        );

      case "warning":
        return (
          <FaExclamationTriangle
            className={styles.warning}
          />
        );

      case "danger":
        return (
          <FaTimesCircle className={styles.danger} />
        );

      default:
        return (
          <FaInfoCircle className={styles.info} />
        );
    }
  };

  if (notifications.length === 0) {
    return (
      <div className={styles.dropdown}>
        <div className={styles.header}>
          <h3>Notifications</h3>
        </div>

        <div className={styles.empty}>
          No Notifications Available
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dropdown}>
      <div className={styles.header}>
        <h3>Notifications</h3>
      </div>

      <div className={styles.list}>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`${styles.item} ${
              !notification.read
                ? styles.unread
                : ""
            }`}
            onClick={() =>
              markAsRead(notification.id)
            }
          >
            <div className={styles.icon}>
              {getIcon(notification.type)}
            </div>

            <div className={styles.content}>
              <h4>{notification.title}</h4>

              <p>{notification.message}</p>

              <span>{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;