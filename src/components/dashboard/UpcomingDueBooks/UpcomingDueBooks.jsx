import { FaBook, FaUser, FaCalendarAlt } from "react-icons/fa";

import dueBooksData from "../../../data/dueBooksData";

import styles from "./UpcomingDueBooks.module.css";

const UpcomingDueBooks = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Upcoming Due Books</h2>
        <p>Books that need attention soon.</p>
      </div>

      <div className={styles.list}>
        {dueBooksData.map((book) => (
          <div
            key={book.id}
            className={styles.card}
          >
            <div className={styles.bookHeader}>
              <div className={styles.bookIcon}>
                <FaBook />
              </div>

              <div>
                <h3>{book.bookTitle}</h3>
                <p>
                  <FaUser /> {book.memberName}
                </p>
              </div>
            </div>

            <div className={styles.footer}>
              <div className={styles.date}>
                <FaCalendarAlt />
                <span>{book.dueDate}</span>
              </div>

              <span
                className={`${styles.badge} ${
                  book.status === "Overdue"
                    ? styles.overdue
                    : book.status === "Due Soon"
                    ? styles.dueSoon
                    : styles.upcoming
                }`}
              >
                {book.status === "Overdue"
                  ? "Overdue"
                  : `${book.daysLeft} Days Left`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingDueBooks;