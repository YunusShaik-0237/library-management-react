import { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
  FaCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";

import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const navigate = useNavigate();

  const { user } = useUser();
  const { logout } = useAuth();

  const [showMenu, setShowMenu] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      className={styles.profileWrapper}
      ref={profileRef}
    >
      <div
        className={styles.profile}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <div className={styles.avatarWrapper}>
          <img
            src={user.avatar}
            alt={user.name}
            className={styles.avatar}
          />

          <FaCircle className={styles.onlineDot} />
        </div>

        <div className={styles.userInfo}>
          <h4>{user.name}</h4>
          <p>{user.role}</p>
        </div>

        <FaChevronDown
          className={`${styles.arrow} ${
            showMenu ? styles.rotate : ""
          }`}
        />
      </div>

      {showMenu && (
        <div className={styles.dropdown}>
          <div className={styles.profileCard}>
            <div className={styles.largeAvatarWrapper}>
              <img
                src={user.avatar}
                alt={user.name}
                className={styles.largeAvatar}
              />

              <FaCircle
                className={styles.largeOnlineDot}
              />
            </div>

            <h3>{user.name}</h3>

            <p>{user.email}</p>

            <span>{user.status}</span>
          </div>

          <button className={styles.menuItem}>
            <FaUser />
            <span>My Profile</span>
          </button>

          <button
            className={styles.menuItem}
            onClick={() => navigate("/settings")}
          >
            <FaCog />
            <span>Settings</span>
          </button>

          <button
            className={styles.logout}
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;