import styles from "./DeleteMemberDialog.module.css";

const DeleteMemberDialog = ({
  isOpen,
  onClose,
  onConfirm,
  selectedMember,
}) => {
  if (!isOpen || !selectedMember) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <div className={styles.icon}>⚠️</div>

        <h2>Delete Member</h2>

        <p>
          Are you sure you want to delete
          <strong> {selectedMember.name}</strong>?
        </p>

        <p className={styles.note}>
          This action cannot be undone.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.cancelBtn}
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className={styles.deleteBtn}
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMemberDialog;