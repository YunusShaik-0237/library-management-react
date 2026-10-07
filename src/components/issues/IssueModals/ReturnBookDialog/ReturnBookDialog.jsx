import styles from "./ReturnBookDialog.module.css";

const ReturnBookDialog = ({
  isOpen,
  onClose,
  selectedIssue,
  onConfirm,
}) => {
  if (!isOpen || !selectedIssue) return null;

  const today = new Date();
  const dueDate = new Date(selectedIssue.dueDate);

  const diffTime = today - dueDate;
  const overdueDays =
    diffTime > 0
      ? Math.floor(diffTime / (1000 * 60 * 60 * 24))
      : 0;

  const fine = overdueDays * 10;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>

        <div className={styles.header}>
          <h2>Return Book</h2>
        </div>

        <div className={styles.body}>

          <p className={styles.message}>
            Are you sure you want to return this
            book?
          </p>

          <div className={styles.infoRow}>
            <span>Book</span>
            <strong>
              {selectedIssue.bookTitle}
            </strong>
          </div>

          <div className={styles.infoRow}>
            <span>Member</span>
            <strong>
              {selectedIssue.memberName}
            </strong>
          </div>

          <div className={styles.infoRow}>
            <span>Issue Date</span>
            <strong>
              {selectedIssue.issueDate}
            </strong>
          </div>

          <div className={styles.infoRow}>
            <span>Due Date</span>
            <strong>
              {selectedIssue.dueDate}
            </strong>
          </div>

          <div className={styles.infoRow}>
            <span>Overdue Days</span>
            <strong>{overdueDays}</strong>
          </div>

          <div className={styles.infoRow}>
            <span>Fine</span>

            <strong className={styles.fine}>
              ₹ {fine}
            </strong>
          </div>

        </div>

        <div className={styles.footer}>

          <button
            className={styles.cancelBtn}
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className={styles.returnBtn}
            onClick={() =>
              onConfirm({
                returnedDate: today
                  .toISOString()
                  .split("T")[0],
                fine,
                status: "Returned",
              })
            }
          >
            Confirm Return
          </button>

        </div>

      </div>
    </div>
  );
};

export default ReturnBookDialog;