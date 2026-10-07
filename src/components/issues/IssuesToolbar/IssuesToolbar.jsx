import { FaSearch, FaPlus, FaUndo } from "react-icons/fa";
import styles from "./IssuesToolbar.module.css";

const IssuesToolbar = ({
  searchTerm,
  setSearchTerm,

  books,
  selectedBook,
  setSelectedBook,

  selectedStatus,
  setSelectedStatus,

  onReset,
  onAddIssue,
}) => {
  return (
    <div className={styles.toolbar}>
      {/* Search */}

      <div className={styles.searchBox}>
        <FaSearch className={styles.icon} />

        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search by Book, Member, Issue ID..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>

      {/* Book Filter */}

      <select
        className={styles.select}
        value={selectedBook}
        onChange={(e) =>
          setSelectedBook(e.target.value)
        }
      >
        {books.map((book) => (
          <option
            key={book}
            value={book}
          >
            {book}
          </option>
        ))}
      </select>

      {/* Status Filter */}

      <select
        className={styles.select}
        value={selectedStatus}
        onChange={(e) =>
          setSelectedStatus(e.target.value)
        }
      >
        <option value="All">All Status</option>
        <option value="Issued">Issued</option>
        <option value="Returned">Returned</option>
        <option value="Overdue">Overdue</option>
      </select>

      {/* Buttons */}

      <div className={styles.actions}>
        <button
          className={styles.resetBtn}
          onClick={onReset}
        >
          <FaUndo />
          Reset
        </button>

        <button
          className={styles.addBtn}
          onClick={onAddIssue}
        >
          <FaPlus />
          Issue Book
        </button>
      </div>
    </div>
  );
};

export default IssuesToolbar;