import { useState } from "react";
import styles from "./AddBookModal.module.css";

const initialForm = {
  isbn: "",
  accessionNo: "",
  title: "",
  author: "",
  category: "",
  publisher: "",
  edition: "",
  language: "English",
  publishedYear: "",
  totalCopies: "",
  availableCopies: "",
  shelf: "",
  price: "",
};

const AddBookModal = ({
  isOpen,
  onClose,
  onAddBook,
}) => {
  const [formData, setFormData] = useState(initialForm);

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
      !formData.title ||
      !formData.author ||
      !formData.category ||
      !formData.isbn ||
      !formData.accessionNo
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newBook = {
      id: Date.now(),

      ...formData,

      publishedYear: Number(formData.publishedYear),

      totalCopies: Number(formData.totalCopies),

      availableCopies: Number(formData.availableCopies),

      price: Number(formData.price),

      status:
        Number(formData.availableCopies) > 0
          ? "Available"
          : "Issued",

      addedDate: new Date()
        .toISOString()
        .split("T")[0],
    };

    onAddBook(newBook);

    setFormData(initialForm);

    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <div className={styles.header}>
          <h2>Add New Book</h2>

          <button
            className={styles.closeBtn}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >

          <h3 className={styles.sectionTitle}>
            Basic Information
          </h3>

          <div className={styles.formGroup}>
            <label>ISBN</label>
            <input
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Accession No</label>
            <input
              name="accessionNo"
              value={formData.accessionNo}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Book Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Author</label>
            <input
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Category</label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Publisher</label>
            <input
              name="publisher"
              value={formData.publisher}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Edition</label>
            <input
              name="edition"
              value={formData.edition}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Language</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
            >
              <option>English</option>
              <option>Telugu</option>
              <option>Hindi</option>
            </select>
          </div>

          <h3 className={styles.sectionTitle}>
            Library Information
          </h3>

          <div className={styles.formGroup}>
            <label>Published Year</label>
            <input
              type="number"
              name="publishedYear"
              value={formData.publishedYear}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Total Copies</label>
            <input
              type="number"
              name="totalCopies"
              value={formData.totalCopies}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Available Copies</label>
            <input
              type="number"
              name="availableCopies"
              value={formData.availableCopies}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Shelf</label>
            <input
              name="shelf"
              value={formData.shelf}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div></div>

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
              Save Book
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default AddBookModal;