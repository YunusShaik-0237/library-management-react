import {
  FaBook,
  FaBookOpen,
  FaUserPlus,
  FaMoneyBillWave,
  FaPlusCircle,
} from "react-icons/fa";

import activityData from "../../../data/activityData";

import styles from "./RecentActivityTimeline.module.css";

const RecentActivityTimeline = () => {
  const getActivityIcon = (type) => {
    switch (type) {
      case "issue":
        return (
          <div className={`${styles.icon} ${styles.issue}`}>
            <FaBook />
          </div>
        );

      case "return":
        return (
          <div className={`${styles.icon} ${styles.return}`}>
            <FaBookOpen />
          </div>
        );

      case "member":
        return (
          <div className={`${styles.icon} ${styles.member}`}>
            <FaUserPlus />
          </div>
        );

      case "fine":
        return (
          <div className={`${styles.icon} ${styles.fine}`}>
            <FaMoneyBillWave />
          </div>
        );

      case "book":
        return (
          <div className={`${styles.icon} ${styles.book}`}>
            <FaPlusCircle />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Recent Activity</h2>
        <p>Latest activities in your library</p>
      </div>

      <div className={styles.timeline}>
        {activityData.map((activity, index) => (
          <div
            key={activity.id}
            className={styles.item}
          >
            {/* Timeline Line */}
            {index !== activityData.length - 1 && (
              <div className={styles.line}></div>
            )}

            {getActivityIcon(activity.type)}

            <div className={styles.content}>
              <h3>{activity.title}</h3>

              <p>{activity.description}</p>

              <span>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivityTimeline;