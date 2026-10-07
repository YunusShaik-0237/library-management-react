import { useState } from "react";

import ConfirmationDialog from "../../common/ConfirmationDialog/ConfirmationDialog";

import styles from "./LibrarySettings.module.css";

const LibrarySettings = ({
  library,
  setLibrary,
}) => {
  const [showDialog, setShowDialog] =
    useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLibrary((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowDialog(true);
  };

  const handleConfirm = () => {
    console.log(
      "Library Settings Saved",
      library
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
            <h2>Library Configuration</h2>

            <p>
              Configure your library
              information, circulation
              policies and contact details.
            </p>
          </div>

          <button
            type="submit"
            className={styles.saveBtn}
          >
            Save Changes
          </button>
        </div>

        {/* Form */}

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Library Name</label>

            <input
              type="text"
              name="libraryName"
              value={library.libraryName}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Library Email</label>

            <input
              type="email"
              name="email"
              value={library.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Contact Number</label>

            <input
              type="text"
              name="phone"
              value={library.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Working Hours</label>

            <input
              type="text"
              name="workingHours"
              value={library.workingHours}
              onChange={handleChange}
            />
          </div>

          <div
            className={`${styles.formGroup} ${styles.fullWidth}`}
          >
            <label>
              Library Address
            </label>

            <textarea
              rows="4"
              name="address"
              value={library.address}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              Maximum Books Per Member
            </label>

            <input
              type="number"
              name="maxBooks"
              value={library.maxBooks}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              Loan Period (Days)
            </label>

            <input
              type="number"
              name="loanPeriod"
              value={library.loanPeriod}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              Fine Per Day (₹)
            </label>

            <input
              type="number"
              name="finePerDay"
              value={library.finePerDay}
              onChange={handleChange}
            />
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
        title="Save Library Settings"
        message="Are you sure you want to save the library configuration changes?"
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

export default LibrarySettings;