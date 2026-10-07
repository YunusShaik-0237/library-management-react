import { useState } from "react";

import ConfirmationDialog from "../../common/ConfirmationDialog/ConfirmationDialog";

import styles from "./SecuritySettings.module.css";

const SecuritySettings = ({
  security,
  setSecurity,
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

    setSecurity((prev) => ({
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
      "Security Settings Saved",
      security
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
            <h2>Security Settings</h2>

            <p>
              Update password and configure
              security preferences.
            </p>
          </div>

          <button
            type="submit"
            className={styles.saveBtn}
          >
            Update Password
          </button>
        </div>

        {/* Password Section */}

        <div className={styles.section}>
          <h3>Password</h3>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>
                Current Password
              </label>

              <input
                type="password"
                name="currentPassword"
                value={
                  security.currentPassword
                }
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                New Password
              </label>

              <input
                type="password"
                name="newPassword"
                value={
                  security.newPassword
                }
                onChange={handleChange}
              />
            </div>

            <div
              className={`${styles.formGroup} ${styles.fullWidth}`}
            >
              <label>
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={
                  security.confirmPassword
                }
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Preferences */}

        <div className={styles.section}>
          <h3>
            Security Preferences
          </h3>

          <div className={styles.options}>
            <label
              className={styles.option}
            >
              <input
                type="checkbox"
                name="twoFactor"
                checked={
                  security.twoFactor
                }
                onChange={handleChange}
              />

              Enable Two-Factor
              Authentication
            </label>

            <label
              className={styles.option}
            >
              <input
                type="checkbox"
                name="autoLogout"
                checked={
                  security.autoLogout
                }
                onChange={handleChange}
              />

              Auto Logout After 30
              Minutes
            </label>

            <label
              className={styles.option}
            >
              <input
                type="checkbox"
                name="strongPassword"
                checked={
                  security.strongPassword
                }
                onChange={handleChange}
              />

              Require Strong
              Passwords
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
            Save Changes
          </button>
        </div>
      </form>

      <ConfirmationDialog
        isOpen={showDialog}
        title="Save Security Settings"
        message="Are you sure you want to save the security settings?"
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

export default SecuritySettings;