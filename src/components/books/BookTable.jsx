import styles from "./BookTable.module.css";

const BookTable = ({ books, onEdit, onDelete }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Book Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                style={{
                  textAlign: "center",
                  padding: "30px",
                  color: "#64748b",
                }}
              >
                No books available.
              </td>
            </tr>
          ) : (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>

                <td>{book.title}</td>

                <td>{book.author}</td>

                <td>{book.category}</td>

                <td>
                  <span
                    className={
                      book.status === "Available"
                        ? styles.available
                        : styles.issued
                    }
                  >
                    {book.status}
                  </span>
                </td>

                <td>
                  <button
                    className={styles.editBtn}
                    onClick={() => onEdit(book)}
                  >
                    Edit
                  </button>

                  <button
                    className={styles.deleteBtn}
                    onClick={() => onDelete(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;