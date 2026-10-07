import styles from "./DeleteBookDialog.module.css";

const DeleteBookDialog = ({
  isOpen,
  onClose,
  selectedBook,
  onDelete,
}) => {
  if (!isOpen || !selectedBook) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <h2>Delete Book</h2>

        <p>
          Are you sure you want to delete
          <strong> "{selectedBook.title}" </strong>?
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
            onClick={() => {
              onDelete(selectedBook.id);
              onClose();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBookDialog;