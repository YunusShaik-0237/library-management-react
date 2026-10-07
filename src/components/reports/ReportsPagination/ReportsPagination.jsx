import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import styles from "./ReportsPagination.module.css";

const ReportsPagination = ({
  currentPage,
  totalPages,
  previousPage,
  nextPage,
  totalReports,
}) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.info}>
        Total Reports :
        <span>{totalReports}</span>
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

export default ReportsPagination;