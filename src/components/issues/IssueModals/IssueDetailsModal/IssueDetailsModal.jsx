import { FaTimes } from "react-icons/fa";
import styles from "./IssueDetailsModal.module.css";

const IssueDetailsModal = ({
  isOpen,
  onClose,
  selectedIssue,
}) => {
  if (!isOpen || !selectedIssue) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}

        <div className={styles.header}>
          <h2>Issue Details</h2>

          <button
            className={styles.closeBtn}
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}

        <div className={styles.body}>
          <div className={styles.row}>
            <span className={styles.label}>Issue ID</span>
            <span className={styles.value}>
              {selectedIssue.issueId}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Book</span>
            <span className={styles.value}>
              {selectedIssue.bookTitle}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>ISBN</span>
            <span className={styles.value}>
              {selectedIssue.isbn}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Member</span>
            <span className={styles.value}>
              {selectedIssue.memberName}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Member ID</span>
            <span className={styles.value}>
              {selectedIssue.memberId}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Issue Date</span>
            <span className={styles.value}>
              {selectedIssue.issueDate}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Due Date</span>
            <span className={styles.value}>
              {selectedIssue.dueDate}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              Returned Date
            </span>

            <span className={styles.value}>
              {selectedIssue.returnedDate || "--"}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Fine</span>

            <span className={styles.value}>
              ₹{selectedIssue.fine}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Status</span>

            <span
              className={`${styles.badge} ${
                selectedIssue.status === "Issued"
                  ? styles.issued
                  : selectedIssue.status ===
                    "Returned"
                  ? styles.returned
                  : styles.overdue
              }`}
            >
              {selectedIssue.status}
            </span>
          </div>

          <div className={styles.remarks}>
            <h3>Remarks</h3>

            <div className={styles.remarksBox}>
              {selectedIssue.remarks ||
                "No remarks available."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetailsModal;