import { useEffect, useState } from "react";
import styles from "./EditReturnModal.module.css";

const EditReturnModal = ({
  isOpen,
  onClose,
  selectedReturn,
  onUpdateReturn,
}) => {
  const [formData, setFormData] = useState({
    returnId: "",
    issueId: "",
    bookTitle: "",
    memberName: "",
    issueDate: "",
    returnDate: "",
    fine: 0,
    status: "Returned",
    remarks: "",
  });

  useEffect(() => {
    if (selectedReturn) {
      setFormData(selectedReturn);
    }
  }, [selectedReturn]);

  if (!isOpen || !selectedReturn) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "fine" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateReturn(formData);

    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Edit Return</h2>

          <button
            className={styles.closeBtn}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <label>Return ID</label>

              <input
                type="text"
                value={formData.returnId}
                disabled
              />
            </div>

            <div className={styles.formGroup}>
              <label>Issue ID</label>

              <input
                type="text"
                value={formData.issueId}
                disabled
              />
            </div>

            <div className={styles.formGroup}>
              <label>Book</label>

              <input
                type="text"
                value={formData.bookTitle}
                disabled
              />
            </div>

            <div className={styles.formGroup}>
              <label>Member</label>

              <input
                type="text"
                value={formData.memberName}
                disabled
              />
            </div>

            <div className={styles.formGroup}>
              <label>Issue Date</label>

              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Return Date</label>

              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Fine</label>

              <input
                type="number"
                name="fine"
                value={formData.fine}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Returned">
                  Returned
                </option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Remarks</label>

            <textarea
              name="remarks"
              rows="4"
              value={formData.remarks}
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditReturnModal;