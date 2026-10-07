import { useState } from "react";

import booksData from "../../../../data/booksData";
import membersData from "../../../../data/membersData";

import styles from "./AddIssueModal.module.css";

const AddIssueModal = ({
  isOpen,
  onClose,
  onAddIssue,
}) => {
  const initialState = {
    bookId: "",
    memberId: "",
    issueDate: "",
    dueDate: "",
    remarks: "",
  };

  const [formData, setFormData] =
    useState(initialState);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Automatically calculate Due Date
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
      (book) =>
        book.id === Number(formData.bookId)
    );

    const selectedMember = membersData.find(
      (member) =>
        member.id === Number(formData.memberId)
    );

    const newIssue = {
      id: Date.now(),

      issueId: `ISS${Date.now()}`,

      bookTitle: selectedBook.title,
      isbn: selectedBook.isbn,

      memberName: selectedMember.name,
      memberId: selectedMember.memberId,

      issueDate: formData.issueDate,
      dueDate: formData.dueDate,

      returnedDate: "",

      remarks: formData.remarks,

      fine: 0,

      status: "Issued",
    };

    onAddIssue(newIssue);

    setFormData(initialState);

    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <h2>Issue Book</h2>

        <form onSubmit={handleSubmit}>

          {/* Book */}

          <div className={styles.formGroup}>
            <label>Book *</label>

            <select
              name="bookId"
              value={formData.bookId}
              onChange={handleChange}
            >
              <option value="">
                Select Book
              </option>

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

          {/* Member */}

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
                  {member.name} (
                  {member.memberId})
                </option>
              ))}
            </select>
          </div>

          {/* Issue Date */}

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

          {/* Remarks */}

          <div className={styles.formGroup}>
            <label>Remarks</label>

            <textarea
              rows="4"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Optional..."
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
              Issue Book
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AddIssueModal;