import { FaTimes } from "react-icons/fa";
import styles from "./ReturnDetailsModal.module.css";

const ReturnDetailsModal = ({
  isOpen,
  onClose,
  selectedReturn,
}) => {
  if (!isOpen || !selectedReturn) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Return Details</h2>

          <button
            className={styles.closeBtn}
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.row}>
            <span className={styles.label}>
              Return ID
            </span>

            <span className={styles.value}>
              {selectedReturn.returnId}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              Issue ID
            </span>

            <span className={styles.value}>
              {selectedReturn.issueId}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              Book
            </span>

            <span className={styles.value}>
              {selectedReturn.bookTitle}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              Member
            </span>

            <span className={styles.value}>
              {selectedReturn.memberName}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              Issue Date
            </span>

            <span className={styles.value}>
              {selectedReturn.issueDate}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              Return Date
            </span>

            <span className={styles.value}>
              {selectedReturn.returnDate}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              Fine
            </span>

            <span className={styles.value}>
              ₹{selectedReturn.fine}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>
              Status
            </span>

            <span
              className={`${styles.badge} ${styles.returned}`}
            >
              {selectedReturn.status}
            </span>
          </div>

          <h3 className={styles.remarksTitle}>
            Remarks
          </h3>

          <div className={styles.remarksBox}>
            {selectedReturn.remarks ||
              "No remarks available."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnDetailsModal;