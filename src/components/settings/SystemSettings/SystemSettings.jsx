import { useState } from "react";

import ConfirmationDialog from "../../common/ConfirmationDialog/ConfirmationDialog";

import styles from "./SystemSettings.module.css";

const SystemSettings = ({
  system,
  setSystem,
}) => {
  const [showDialog, setShowDialog] =
    useState(false);

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setSystem((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowDialog(true);
  };

  const handleConfirm = () => {
    console.log(
      "System Preferences Saved",
      system
    );

    // Backend API Call Here Later

    setShowDialog(false);
  };

  return (
    <>
      <form
        className={styles.container}
        onSubmit={handleSubmit}
      >
        {/* Header */}

        <div className={styles.header}>
          <div>
            <h2>System Preferences</h2>

            <p>
              Configure application
              behavior, regional settings
              and notifications.
            </p>
          </div>

          <button
            type="submit"
            className={styles.saveBtn}
          >
            Save Preferences
          </button>
        </div>

        {/* General Settings */}

        <div className={styles.section}>
          <h3>General Settings</h3>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Theme</label>

              <select
                name="theme"
                value={system.theme}
                onChange={handleChange}
              >
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Language</label>

              <select
                name="language"
                value={system.language}
                onChange={handleChange}
              >
                <option>English</option>
                <option>Telugu</option>
                <option>Hindi</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Date Format</label>

              <select
                name="dateFormat"
                value={
                  system.dateFormat
                }
                onChange={handleChange}
              >
                <option>
                  DD/MM/YYYY
                </option>
                <option>
                  MM/DD/YYYY
                </option>
                <option>
                  YYYY-MM-DD
                </option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Time Zone</label>

              <select
                name="timeZone"
                value={system.timeZone}
                onChange={handleChange}
              >
                <option>
                  Asia/Kolkata
                </option>
                <option>UTC</option>
                <option>
                  America/New_York
                </option>
              </select>
            </div>

            <div
              className={`${styles.formGroup} ${styles.fullWidth}`}
            >
              <label>
                Backup Frequency
              </label>

              <select
                name="backup"
                value={system.backup}
                onChange={handleChange}
              >
                <option>
                  Daily
                </option>
                <option>
                  Weekly
                </option>
                <option>
                  Monthly
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}

        <div className={styles.section}>
          <h3>Notifications</h3>

          <div className={styles.options}>
            <label
              className={styles.option}
            >
              <input
                type="checkbox"
                name="emailNotification"
                checked={
                  system.emailNotification
                }
                onChange={handleChange}
              />

              Email Notifications
            </label>

            <label
              className={styles.option}
            >
              <input
                type="checkbox"
                name="smsNotification"
                checked={
                  system.smsNotification
                }
                onChange={handleChange}
              />

              SMS Notifications
            </label>

            <label
              className={styles.option}
            >
              <input
                type="checkbox"
                name="desktopNotification"
                checked={
                  system.desktopNotification
                }
                onChange={handleChange}
              />

              Desktop Notifications
            </label>
          </div>
        </div>

        {/* Footer */}

        <div className={styles.footer}>
          <button
            type="reset"
            className={styles.cancelBtn}
          >
            Cancel
          </button>

          <button
            type="submit"
            className={styles.saveBtn}
          >
            Save Preferences
          </button>
        </div>
      </form>

      <ConfirmationDialog
        isOpen={showDialog}
        title="Save System Preferences"
        message="Are you sure you want to save the system preferences?"
        confirmText="Save"
        cancelText="Cancel"
        type="primary"
        onClose={() =>
          setShowDialog(false)
        }
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default SystemSettings;