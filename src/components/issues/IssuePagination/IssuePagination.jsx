import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import styles from "./IssuePagination.module.css";

const IssuePagination = ({
  currentPage,
  totalPages,
  previousPage,
  nextPage,
  totalIssues,
}) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.info}>
        Total Issues : <strong>{totalIssues}</strong>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.pageBtn}
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>

        <span className={styles.pageNumber}>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          className={styles.pageBtn}
          onClick={nextPage}
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default IssuePagination;