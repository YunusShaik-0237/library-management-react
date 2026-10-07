import styles from "./MemberDetailsModal.module.css";

const MemberDetailsModal = ({ isOpen, onClose, selectedMember }) => {
  if (!isOpen || !selectedMember) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}

        <div className={styles.header}>
          <h2>Member Details</h2>

          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Body */}

        <div className={styles.body}>
          <div className={styles.item}>
            <label>Member ID</label>
            <span>{selectedMember.memberId}</span>
          </div>

          <div className={styles.item}>
            <label>Admission No</label>
            <span>{selectedMember.admissionNo}</span>
          </div>

          <div className={styles.item}>
            <label>Full Name</label>
            <span>{selectedMember.name}</span>
          </div>

          <div className={styles.item}>
            <label>Gender</label>
            <span>{selectedMember.gender}</span>
          </div>

          <div className={styles.item}>
            <label>Phone</label>
            <span>{selectedMember.phone}</span>
          </div>

          <div className={styles.item}>
            <label>Email</label>
            <span>{selectedMember.email}</span>
          </div>

          <div className={styles.item}>
            <label>Course</label>
            <span>{selectedMember.course}</span>
          </div>

          <div className={styles.item}>
            <label>Department</label>
            <span>{selectedMember.department}</span>
          </div>

          <div className={styles.item}>
            <label>Year</label>
            <span>{selectedMember.year}</span>
          </div>

          <div className={styles.item}>
            <label>Books Issued</label>
            <span>
              {selectedMember.booksIssued} / {selectedMember.maxBooks}
            </span>
          </div>

          <div className={styles.item}>
            <label>Fine</label>
            <span>₹{selectedMember.fine}</span>
          </div>

          <div className={styles.item}>
            <label>Status</label>

            <span
              className={`${styles.status} ${
                selectedMember.status === "Active"
                  ? styles.active
                  : styles.inactive
              }`}
            >
              {selectedMember.status}
            </span>
          </div>

          <div className={styles.item}>
            <label>Joined Date</label>
            <span>{selectedMember.joinedDate}</span>
          </div>

          <div className={styles.item}>
            <label>Expiry Date</label>
            <span>{selectedMember.expiryDate}</span>
          </div>

          <div className={`${styles.item} ${styles.fullWidth}`}>
            <label>Address</label>
            <span>{selectedMember.address}</span>
          </div>
        </div>

        {/* Footer */}

        <div className={styles.footer}>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberDetailsModal;
