import {
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaHdd,
} from "react-icons/fa";

import styles from "./SystemStatus.module.css";

const statusData = [
  {
    title: "Database",
    status: "Online",
    color: "online",
    icon: <FaDatabase />,
  },
  {
    title: "Backend API",
    status: "Running",
    color: "online",
    icon: <FaServer />,
  },
  {
    title: "Authentication",
    status: "Secure",
    color: "online",
    icon: <FaShieldAlt />,
  },
  {
    title: "Storage",
    status: "68% Used",
    color: "warning",
    icon: <FaHdd />,
  },
];

const SystemStatus = () => {
  return (
    <section className={styles.systemStatus}>
      <div className={styles.header}>
        <h2>System Status</h2>
        <p>
          Current health and performance of the
          library management system.
        </p>
      </div>

      <div className={styles.grid}>
        {statusData.map((item) => (
          <div
            key={item.title}
            className={styles.card}
          >
            <div className={styles.icon}>
              {item.icon}
            </div>

            <div className={styles.content}>
              <h3>{item.title}</h3>

              <span
                className={`${styles.badge} ${
                  styles[item.color]
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SystemStatus;