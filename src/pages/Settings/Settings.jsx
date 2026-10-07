import useSettings from "../../hooks/useSettings";

import ProfileSettings from "../../components/settings/ProfileSettings/ProfileSettings";
import LibrarySettings from "../../components/settings/LibrarySettings/LibrarySettings";
import SecuritySettings from "../../components/settings/SecuritySettings/SecuritySettings";
import SystemSettings from "../../components/settings/SystemSettings/SystemSettings";

import styles from "./Settings.module.css";

const Settings = () => {
  const {
    activeTab,
    setActiveTab,

    profile,
    setProfile,

    library,
    setLibrary,

    security,
    setSecurity,

    system,
    setSystem,
  } = useSettings();

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <ProfileSettings
            profile={profile}
            setProfile={setProfile}
          />
        );

      case "Library":
        return (
          <LibrarySettings
            library={library}
            setLibrary={setLibrary}
          />
        );

      case "Security":
        return (
          <SecuritySettings
            security={security}
            setSecurity={setSecurity}
          />
        );

      case "System":
        return (
          <SystemSettings
            system={system}
            setSystem={setSystem}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.page}>
      {/* Banner */}

      <div className={styles.header}>
        <div>
          <h1>⚙ Settings</h1>

          <p>
            Manage library preferences,
            profile and security settings.
          </p>
        </div>

        <div className={styles.headerBadge}>
          System Configuration
        </div>
      </div>

      {/* Layout */}

      <div className={styles.container}>
        {/* Sidebar */}

        <div className={styles.sidebar}>
          <button
            className={`${styles.menuItem} ${
              activeTab === "Profile"
                ? styles.active
                : ""
            }`}
            onClick={() =>
              setActiveTab("Profile")
            }
          >
            👤 Profile
          </button>

          <button
            className={`${styles.menuItem} ${
              activeTab === "Library"
                ? styles.active
                : ""
            }`}
            onClick={() =>
              setActiveTab("Library")
            }
          >
            📚 Library
          </button>

          <button
            className={`${styles.menuItem} ${
              activeTab === "Security"
                ? styles.active
                : ""
            }`}
            onClick={() =>
              setActiveTab("Security")
            }
          >
            🔒 Security
          </button>

          <button
            className={`${styles.menuItem} ${
              activeTab === "System"
                ? styles.active
                : ""
            }`}
            onClick={() =>
              setActiveTab("System")
            }
          >
            💻 System
          </button>
        </div>

        {/* Content */}

        <div className={styles.content}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;