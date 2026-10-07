import { FaSearch, FaPlus, FaUndo } from "react-icons/fa";
import styles from "./BookFilters.module.css";

const BookFilters = ({
  searchTerm,
  setSearchTerm,

  selectedCategory,
  setSelectedCategory,

  selectedStatus,
  setSelectedStatus,

  categories,

  onReset,

  onAddBook,
}) => {
  return (
    <div className={styles.container}>
      {/* Search */}
      <div className={styles.searchBox}>
        <FaSearch className={styles.searchIcon} />

        <input
          type="text"
          placeholder="Search by Title, Author or ISBN..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category */}
      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
        className={styles.select}
      >
        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>

      {/* Status */}
      <select
        value={selectedStatus}
        onChange={(e) =>
          setSelectedStatus(e.target.value)
        }
        className={styles.select}
      >
        <option value="All">All Status</option>
        <option value="Available">Available</option>
        <option value="Issued">Issued</option>
      </select>

      {/* Buttons */}
      <div className={styles.buttons}>
        <button
          className={styles.resetBtn}
          onClick={onReset}
        >
          <FaUndo />

          Reset
        </button>

        <button
          className={styles.addBtn}
          onClick={onAddBook}
        >
          <FaPlus />

          Add Book
        </button>
      </div>
    </div>
  );
};

export default BookFilters;