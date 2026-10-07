import { useEffect, useState } from "react";
import styles from "./EditMemberModal.module.css";

const EditMemberModal = ({
  isOpen,
  onClose,
  selectedMember,
  onUpdateMember,
}) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (selectedMember) {
      setFormData(selectedMember);
    }
  }, [selectedMember]);

  if (!isOpen || !selectedMember) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateMember({
      ...formData,
      maxBooks: Number(formData.maxBooks),
      booksIssued: Number(formData.booksIssued),
      fine: Number(formData.fine),
    });

    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}

        <div className={styles.header}>
          <h2>Edit Member</h2>

          <button
            className={styles.closeBtn}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Form */}

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          {/* Personal Information */}

          <h3 className={styles.sectionTitle}>
            Personal Information
          </h3>

          <div className={styles.formGroup}>
            <label>Member ID</label>
            <input
              name="memberId"
              value={formData.memberId || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Admission No</label>
            <input
              name="admissionNo"
              value={formData.admissionNo || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender || "Male"}
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Phone</label>
            <input
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </div>

          {/* Academic Information */}

          <h3 className={styles.sectionTitle}>
            Academic Information
          </h3>

          <div className={styles.formGroup}>
            <label>Course</label>
            <input
              name="course"
              value={formData.course || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Department</label>
            <input
              name="department"
              value={formData.department || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Year</label>
            <input
              name="year"
              value={formData.year || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Maximum Books</label>
            <input
              type="number"
              name="maxBooks"
              value={formData.maxBooks || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Books Issued</label>
            <input
              type="number"
              name="booksIssued"
              value={formData.booksIssued || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Fine (₹)</label>
            <input
              type="number"
              name="fine"
              value={formData.fine || ""}
              onChange={handleChange}
            />
          </div>

          <div
            className={`${styles.formGroup} ${styles.fullWidth}`}
          >
            <label>Address</label>

            <textarea
              rows="3"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
            />
          </div>

          {/* Footer */}

          <div className={styles.footer}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={styles.saveBtn}
            >
              Update Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMemberModal;