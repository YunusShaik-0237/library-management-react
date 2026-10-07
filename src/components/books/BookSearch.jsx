import styles from "./BookSearch.module.css";

const BookSearch = ({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
}) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={styles.filterSelect}
      >
        <option value="All">All Categories</option>
        <option value="Programming">Programming</option>
        <option value="Database">Database</option>
        <option value="AI & ML">AI & ML</option>
      </select>
    </div>
  );
};

export default BookSearch;