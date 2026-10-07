import {
  FaBook,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import useSearchStore from "../../../store/searchStore";

import styles from "./BookTable.module.css";

const BookTable = ({
  books,
  onView,
  onEdit,
  onDelete,
}) => {
  const { highlightedId } =
    useSearchStore();

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Book</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Available</th>
            <th>Shelf</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr
                key={book.id}
                className={
                  highlightedId === book.id
                    ? styles.highlightRow
                    : ""
                }
              >
                {/* Book Icon */}
                <td>
                  <div className={styles.bookIcon}>
                    <FaBook />
                  </div>
                </td>

                {/* Title */}
                <td>
                  <div className={styles.bookInfo}>
                    <h4>{book.title}</h4>

                    <span>{book.isbn}</span>
                  </div>
                </td>

                {/* Author */}
                <td>{book.author}</td>

                {/* Category */}
                <td>{book.category}</td>

                {/* Copies */}
                <td>
                  {book.availableCopies} /{" "}
                  {book.totalCopies}
                </td>

                {/* Shelf */}
                <td>{book.shelf}</td>

                {/* Status */}
                <td>
                  <span
                    className={`${styles.status} ${
                      book.status ===
                      "Available"
                        ? styles.available
                        : styles.issued
                    }`}
                  >
                    {book.status}
                  </span>
                </td>

                {/* Actions */}
                <td>
                  <div className={styles.actions}>
                    <button
                      className={`${styles.actionBtn} ${styles.view}`}
                      onClick={() =>
                        onView(book)
                      }
                      title="View"
                    >
                      <FaEye />
                    </button>

                    <button
                      className={`${styles.actionBtn} ${styles.edit}`}
                      onClick={() =>
                        onEdit(book)
                      }
                      title="Edit"
                    >
                      <FaEdit />
                    </button>

                    <button
                      className={`${styles.actionBtn} ${styles.delete}`}
                      onClick={() =>
                        onDelete(book)
                      }
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
                className={styles.empty}
              >
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;