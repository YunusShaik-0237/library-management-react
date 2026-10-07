import { useNavigate } from "react-router-dom";
import { FaFire, FaBook } from "react-icons/fa";

import popularBooksData from "../../../data/popularBooksData";

import styles from "./PopularBooks.module.css";

const PopularBooks = () => {
  const navigate = useNavigate();

  // Show only top 4 popular books
  const topBooks = popularBooksData.slice(0, 4);

  return (
    <section className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2>Popular Books</h2>
          <p>Most borrowed books this month</p>
        </div>

        <button
          className={styles.viewAllBtn}
          onClick={() => navigate("/books")}
        >
          View All →
        </button>
      </div>

      {/* Books */}
      <div className={styles.bookList}>
        {topBooks.map((book) => (
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

            <div className={styles.badge}>
              <FaFire />

              <span>{book.borrowCount} Borrows</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;