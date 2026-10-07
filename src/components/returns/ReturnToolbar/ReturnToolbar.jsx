import { FaSearch, FaUndo } from "react-icons/fa";

import styles from "./ReturnToolbar.module.css";

const ReturnToolbar = ({
  searchTerm,
  setSearchTerm,

  books,
  selectedBook,
  setSelectedBook,

  members,
  selectedMember,
  setSelectedMember,

  selectedFine,
  setSelectedFine,

  onReset,
}) => {
  return (
    <div className={styles.toolbar}>
      {/* ================= Search ================= */}

      <div className={styles.searchBox}>
        <FaSearch className={styles.icon} />

        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search by Return ID, Issue ID, Book or Member..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>

      {/* ================= Book Filter ================= */}

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

      {/* ================= Member Filter ================= */}

      <select
        className={styles.select}
        value={selectedMember}
        onChange={(e) =>
          setSelectedMember(e.target.value)
        }
      >
        {members.map((member) => (
          <option
            key={member}
            value={member}
          >
            {member}
          </option>
        ))}
      </select>

      {/* ================= Fine Filter ================= */}

      <select
        className={styles.select}
        value={selectedFine}
        onChange={(e) =>
          setSelectedFine(e.target.value)
        }
      >
        <option value="All">All Fine</option>
        <option value="With Fine">With Fine</option>
        <option value="No Fine">No Fine</option>
      </select>

      {/* ================= Reset Button ================= */}

      <div className={styles.actions}>
        <button
          className={styles.resetBtn}
          onClick={onReset}
        >
          <FaUndo />

          Reset
        </button>
      </div>
    </div>
  );
};

export default ReturnToolbar;