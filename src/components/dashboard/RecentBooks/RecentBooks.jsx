import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";

import booksData from "../../../data/booksData";

import styles from "./RecentBooks.module.css";

const RecentBooks = () => {
  const navigate = useNavigate();

  // Show only the latest 4 books
  const recentBooks = booksData.slice(0, 4);

  return (
    <section className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2>Recent Books</h2>
          <p>Latest books added to the library</p>
        </div>

        <button
          className={styles.viewAllBtn}
          onClick={() => navigate("/books")}
        >
          View All →
        </button>
      </div>

      {/* Books List */}
      <div className={styles.bookList}>
        {recentBooks.map((book) => (
          <div
            key={book.id}
            className={styles.bookCard}
          >
            <div className={styles.icon}>
              <FaBook />
            </div>

            <div className={styles.info}>
              <h3>{book.title}</h3>

              <p>{book.author}</p>
            </div>

            <span
              className={`${styles.status} ${
                book.status === "Available"
                  ? styles.available
                  : styles.issued
              }`}
            >
              {book.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBooks;