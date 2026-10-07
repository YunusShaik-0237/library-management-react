import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import styles from "./ReturnPagination.module.css";

const ReturnPagination = ({
  currentPage,
  totalPages,
  previousPage,
  nextPage,
  totalReturns,
}) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.info}>
        Total Returns :
        <span>{totalReturns}</span>
      </div>

      <div className={styles.controls}>
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
          Previous
        </button>

        <span className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ReturnPagination;