import { useState, useEffect } from "react";
import styles from "./BookForm.module.css";

const BookForm = ({ isOpen, onClose, addBook, updateBook, selectedBook }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    status: "Available",
  });

  // Fill form when editing
  useEffect(() => {
    // Defer state update to avoid synchronous setState inside effect
    let t = setTimeout(() => {
      if (selectedBook) {
        setFormData({
          title: selectedBook.title ?? "",
          author: selectedBook.author ?? "",
          category: selectedBook.category ?? "",
          status: selectedBook.status ?? "Available",
        });
      } else {
        setFormData({
          title: "",
          author: "",
          category: "",
          status: "Available",
        });
      }
    }, 0);

    return () => clearTimeout(t);
  }, [selectedBook]);

  if (!isOpen) return null;

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.author.trim() ||
      !formData.category.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (selectedBook) {
      updateBook({
        ...selectedBook,
        ...formData,
      });
    } else {
      addBook(formData);
    }

    setFormData({
      title: "",
      author: "",
      category: "",
      status: "Available",
    });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{selectedBook ? "Edit Book" : "Add New Book"}</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Book Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter book title"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Author</label>

            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Category</label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="Issued">Issued</option>
            </select>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className={styles.saveBtn}>
              {selectedBook ? "Update Book" : "Add Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
