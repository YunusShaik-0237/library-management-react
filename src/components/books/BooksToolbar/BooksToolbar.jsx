import { FaSearch, FaPlus, FaUndo } from "react-icons/fa";
import styles from "./BooksToolbar.module.css";

const BooksToolbar = ({
  searchTerm,
  setSearchTerm,

  categories,
  selectedCategory,
  setSelectedCategory,

  selectedStatus,
  setSelectedStatus,

  onReset,
  onAddBook,
}) => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.searchBox}>
        <FaSearch className={styles.icon} />

        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search by Title, Author or ISBN..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <select
        className={styles.select}
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        className={styles.select}
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Available">Available</option>
        <option value="Issued">Issued</option>
      </select>

      <div className={styles.actions}>
        <button className={styles.resetBtn} onClick={onReset}>
          <FaUndo />
          Reset
        </button>

        <button className={styles.addBtn} onClick={onAddBook}>
          <FaPlus />
          Add Book
        </button>
      </div>
    </div>
  );
};

export default BooksToolbar;
