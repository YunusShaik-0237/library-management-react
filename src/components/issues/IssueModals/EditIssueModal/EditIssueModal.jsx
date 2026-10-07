import { useEffect, useState } from "react";

import booksData from "../../../../data/booksData";
import membersData from "../../../../data/membersData";

import styles from "./EditIssueModal.module.css";

const EditIssueModal = ({
  isOpen,
  onClose,
  selectedIssue,
  onUpdateIssue,
}) => {
  const [formData, setFormData] = useState({
    bookId: "",
    memberId: "",
    issueDate: "",
    dueDate: "",
    remarks: "",
  });

  useEffect(() => {
    if (selectedIssue) {
      const selectedBook = booksData.find(
        (book) => book.title === selectedIssue.bookTitle
      );

      const selectedMember = membersData.find(
        (member) =>
          member.memberId === selectedIssue.memberId
      );

      setFormData({
        bookId: selectedBook?.id || "",
        memberId: selectedMember?.id || "",
        issueDate: selectedIssue.issueDate,
        dueDate: selectedIssue.dueDate,
        remarks: selectedIssue.remarks || "",
      });
    }
  }, [selectedIssue]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "issueDate") {
      const issue = new Date(value);

      const due = new Date(issue);

      due.setDate(due.getDate() + 14);

      const dueDate = due
        .toISOString()
        .split("T")[0];

      setFormData((prev) => ({
        ...prev,
        issueDate: value,
        dueDate,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.bookId ||
      !formData.memberId ||
      !formData.issueDate
    ) {
      alert("Please complete all required fields.");
      return;
    }

    const selectedBook = booksData.find(
      (book) => book.id === Number(formData.bookId)
    );

    const selectedMember = membersData.find(
      (member) =>
        member.id === Number(formData.memberId)
    );

    const updatedIssue = {
      ...selectedIssue,

      bookTitle: selectedBook.title,
      isbn: selectedBook.isbn,

      memberName: selectedMember.name,
      memberId: selectedMember.memberId,

      issueDate: formData.issueDate,
      dueDate: formData.dueDate,
      remarks: formData.remarks,
    };

    onUpdateIssue(updatedIssue);

    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <h2>Edit Issue</h2>

        <form onSubmit={handleSubmit}>

          <div className={styles.formGroup}>
            <label>Book *</label>

            <select
              name="bookId"
              value={formData.bookId}
              onChange={handleChange}
            >
              <option value="">Select Book</option>

              {booksData.map((book) => (
                <option
                  key={book.id}
                  value={book.id}
                >
                  {book.title}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Member *</label>

            <select
              name="memberId"
              value={formData.memberId}
              onChange={handleChange}
            >
              <option value="">
                Select Member
              </option>

              {membersData.map((member) => (
                <option
                  key={member.id}
                  value={member.id}
                >
                  {member.name} ({member.memberId})
                </option>
              ))}
            </select>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label>Issue Date *</label>

              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Due Date</label>

              <input
                type="date"
                value={formData.dueDate}
                readOnly
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Remarks</label>

            <textarea
              rows="4"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>

          <div className={styles.actions}>

            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={styles.submitBtn}
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default EditIssueModal;