import styles from "./ConfirmationDialog.module.css";

const ConfirmationDialog = ({
  isOpen,
  title = "Confirmation",
  message = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "primary",
  onConfirm,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }

    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.dialog}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className={styles.dialogHeader}>
          <div
            className={`${styles.iconContainer} ${
              type === "danger"
                ? styles.dangerIcon
                : type === "warning"
                ? styles.warningIcon
                : styles.primaryIcon
            }`}
          >
            {type === "danger"
              ? "🗑"
              : type === "warning"
              ? "⚠"
              : "💾"}
          </div>

          <h2 className={styles.title}>
            {title}
          </h2>

          <p className={styles.message}>
            {message}
          </p>
        </div>

        {/* Footer */}

        <div className={styles.dialogFooter}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onClose}
          >
            {cancelText}
          </button>

          <button
            type="button"
            className={`${styles.confirmButton} ${
              type === "danger"
                ? styles.dangerButton
                : type === "warning"
                ? styles.warningButton
                : styles.primaryButton
            }`}
            onClick={handleConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;