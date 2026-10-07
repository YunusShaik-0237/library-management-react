import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";

import useGlobalSearch from "../../../hooks/useGlobalSearch";
import useNotifications from "../../../hooks/useNotifications";
import useSearchStore from "../../../store/searchStore";

import Notifications from "../Notifications/Notifications";
import UserProfile from "../UserProfile/UserProfile";

import styles from "./Topbar.module.css";

const Topbar = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const [showNotifications, setShowNotifications] =
    useState(false);

  const results = useGlobalSearch(searchTerm);

  const { setSelectedItem } =
    useSearchStore();

  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearNotifications,
  } = useNotifications();

  const handleNavigation = (item) => {
    setSelectedItem(item);

    switch (item.type) {
      case "Book":
        navigate("/books");
        break;

      case "Member":
        navigate("/members");
        break;

      case "Issue":
        navigate("/issues");
        break;

      default:
        break;
    }

    setSearchTerm("");
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  return (
    <header className={styles.topbar}>
      {/* Search */}

      <div className={styles.searchWrapper}>
        <FaSearch className={styles.searchIcon} />

        <input
          type="text"
          placeholder="Search books, members, issues..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className={styles.searchInput}
        />

        {searchTerm && (
          <div className={styles.dropdown}>
            {results.length > 0 ? (
              results.map((item) => (
                <div
                  key={`${item.type}-${item.id}`}
                  className={styles.resultItem}
                  onClick={() =>
                    handleNavigation(item)
                  }
                >
                  <h4>{item.title}</h4>

                  <p>
                    {item.type} •{" "}
                    {item.subtitle}
                  </p>
                </div>
              ))
            ) : (
              <div
                className={styles.noResult}
              >
                No Results Found
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Section */}

      <div className={styles.actions}>
        <div
          className={
            styles.notificationWrapper
          }
        >
          <button
            className={
              styles.notificationBtn
            }
            onClick={
              toggleNotifications
            }
          >
            <FaBell />

            {unreadCount > 0 && (
              <span
                className={styles.badge}
              >
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div
              className={
                styles.notificationDropdown
              }
            >
              <div
                className={
                  styles.notificationActions
                }
              >
                <button
                  onClick={
                    markAllAsRead
                  }
                >
                  Mark All Read
                </button>

                <button
                  onClick={
                    clearNotifications
                  }
                >
                  Clear All
                </button>
              </div>

              <Notifications
                notifications={
                  notifications
                }
                markAsRead={
                  markAsRead
                }
              />
            </div>
          )}
        </div>

        <UserProfile />
      </div>
    </header>
  );
};

export default Topbar;