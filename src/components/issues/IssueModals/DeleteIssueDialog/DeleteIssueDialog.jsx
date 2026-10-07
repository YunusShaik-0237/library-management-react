import styles from "./DeleteIssueDialog.module.css";

const DeleteIssueDialog = ({
  isOpen,
  onClose,
  onConfirm,
  selectedIssue,
}) => {
  if (!isOpen || !selectedIssue) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <h2>Delete Issue</h2>

        <p>
          Are you sure you want to delete
          <strong>
            {" "}
            {selectedIssue.issueId}
          </strong>
          ?
        </p>

        <div className={styles.actions}>
          <button
            className={styles.cancel}
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className={styles.delete}
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteIssueDialog;