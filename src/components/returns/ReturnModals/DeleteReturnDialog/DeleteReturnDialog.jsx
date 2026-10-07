import styles from "./DeleteReturnDialog.module.css";

const DeleteReturnDialog = ({
  isOpen,
  onClose,
 selectedReturn,
  onConfirm,
}) => {
  if (!isOpen || !selectedReturn) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <h2>Delete Return Record</h2>

        <p>
          Are you sure you want to delete this
          return record?
        </p>

        <div className={styles.info}>
          <div>
            <span>Return ID</span>
            <strong>{selectedReturn.returnId}</strong>
          </div>

          <div>
            <span>Book</span>
            <strong>{selectedReturn.bookTitle}</strong>
          </div>

          <div>
            <span>Member</span>
            <strong>{selectedReturn.memberName}</strong>
          </div>

          <div>
            <span>Fine</span>
            <strong>₹{selectedReturn.fine}</strong>
          </div>
        </div>

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
            Delete Record
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteReturnDialog;