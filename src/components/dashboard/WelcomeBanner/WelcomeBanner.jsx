import { FaBookOpen } from "react-icons/fa";
import useUser from "../../../hooks/useUser";

import styles from "./WelcomeBanner.module.css";

const WelcomeBanner = () => {
  const { user } = useUser();

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <h1>
          Welcome back,
          <span> {user.name} 👋</span>
        </h1>

        <p>
          Manage your library efficiently and keep
          track of books, members and activities from
          one place.
        </p>

        <span className={styles.date}>
          {today}
        </span>
      </div>

      <div className={styles.right}>
        <div className={styles.iconContainer}>
          <FaBookOpen />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;