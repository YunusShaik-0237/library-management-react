import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaUsers,
  FaExchangeAlt,
  FaUndo,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuthContext } from "../../../context/AuthContext";

import styles from "./Sidebar.module.css";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    title: "Books",
    icon: <FaBook />,
    path: "/books",
  },
  {
    title: "Members",
    icon: <FaUsers />,
    path: "/members",
  },
  {
    title: "Issue Books",
    icon: <FaExchangeAlt />,
    path: "/issues",
  },
  {
    title: "Return Books",
    icon: <FaUndo />,
    path: "/returns",
  },
  {
    title: "Reports",
    icon: <FaChartBar />,
    path: "/reports",
  },
  {
    title: "Settings",
    icon: <FaCog />,
    path: "/settings",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuthContext();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    logout();
    navigate("/login", { replace: true });
  };

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        📚 LibraryHub
      </div>

      {/* Navigation */}
      <nav className={styles.menu}>
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            <span className={styles.icon}>
              {item.icon}
            </span>

            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className={styles.logout}>
        <button
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;