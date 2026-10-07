import { useState } from "react";
import styles from "./AddMemberModal.module.css";

const initialForm = {
  memberId: "",
  admissionNo: "",
  name: "",
  gender: "Male",
  phone: "",
  email: "",
  course: "",
  department: "",
  year: "",
  address: "",
  maxBooks: 5,
};

const AddMemberModal = ({
  isOpen,
  onClose,
  onAddMember,
}) => {
  const [formData, setFormData] =
    useState(initialForm);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.memberId ||
      !formData.name ||
      !formData.phone ||
      !formData.course
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newMember = {
      id: Date.now(),

      ...formData,

      booksIssued: 0,

      fine: 0,

      status: "Active",

      joinedDate: new Date()
        .toISOString()
        .split("T")[0],

      expiryDate: new Date(
        new Date().setFullYear(
          new Date().getFullYear() + 1
        )
      )
        .toISOString()
        .split("T")[0],
    };

    onAddMember(newMember);

    setFormData(initialForm);

    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}

        <div className={styles.header}>
          <h2>Add Member</h2>

          <button
            onClick={onClose}
            className={styles.closeBtn}
          >
            ✕
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <h3 className={styles.sectionTitle}>
            Personal Information
          </h3>

          <div className={styles.formGroup}>
            <label>Member ID</label>

            <input
              name="memberId"
              value={formData.memberId}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Admission No</label>

            <input
              name="admissionNo"
              value={formData.admissionNo}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Full Name</label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Gender</label>

            <select
              name="gender"
              value={formData.gender}
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
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <h3 className={styles.sectionTitle}>
            Academic Information
          </h3>

          <div className={styles.formGroup}>
            <label>Course</label>

            <input
              name="course"
              value={formData.course}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Department</label>

            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Year</label>

            <input
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Maximum Books</label>

            <input
              type="number"
              name="maxBooks"
              value={formData.maxBooks}
              onChange={handleChange}
            />
          </div>

          <div
            className={`${styles.formGroup} ${styles.fullWidth}`}
          >
            <label>Address</label>

            <textarea
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

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
              Save Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddMemberModal;