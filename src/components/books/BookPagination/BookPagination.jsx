import styles from "./BookPagination.module.css";

const BookPagination = ({
  currentPage,
  totalPages,
  nextPage,
  previousPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={previousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages || 1}
      </span>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages || totalPages === 0}
      >
        Next
      </button>
    </div>
  );
};

export default BookPagination;