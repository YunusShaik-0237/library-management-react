import { useNavigate } from "react-router-dom";
import {
  FaBookMedical,
  FaUserPlus,
  FaExchangeAlt,
  FaUndoAlt,
} from "react-icons/fa";

import styles from "./QuickActions.module.css";

const actions = [
  {
    title: "Add Book",
    description: "Register a new book",
    icon: <FaBookMedical />,
    path: "/books",
    color: styles.blue,
  },
  {
    title: "Add Member",
    description: "Create a new member",
    icon: <FaUserPlus />,
    path: "/members",
    color: styles.green,
  },
  {
    title: "Issue Book",
    description: "Issue a book",
    icon: <FaExchangeAlt />,
    path: "/issues",
    color: styles.orange,
  },
  {
    title: "Return Book",
    description: "Return issued books",
    icon: <FaUndoAlt />,
    path: "/returns",
    color: styles.purple,
  },
];

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.quickActions}>
      <div className={styles.header}>
        <h2>Quick Actions</h2>
        <p>Frequently used library operations.</p>
      </div>

      <div className={styles.grid}>
        {actions.map((action) => (
          <div
            key={action.title}
            className={`${styles.card} ${action.color}`}
            onClick={() => navigate(action.path)}
          >
            <div className={styles.icon}>
              {action.icon}
            </div>

            <h3>{action.title}</h3>

            <p>{action.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;