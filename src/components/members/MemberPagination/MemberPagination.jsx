import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import styles from "./MemberPagination.module.css";

const MemberPagination = ({
  currentPage,
  totalPages,
  previousPage,
  nextPage,
  totalMembers,
}) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.info}>
        Total Members : <strong>{totalMembers}</strong>
      </div>

      <div className={styles.controls}>
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className={styles.pageBtn}
        >
          <FaChevronLeft />
        </button>

        <span className={styles.pageNumber}>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          onClick={nextPage}
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
          className={styles.pageBtn}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MemberPagination;