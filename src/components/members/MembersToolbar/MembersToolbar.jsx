import { FaSearch, FaPlus, FaUndo } from "react-icons/fa";
import styles from "./MembersToolbar.module.css";

const MembersToolbar = ({
  searchTerm,
  setSearchTerm,

  courses,
  selectedCourse,
  setSelectedCourse,

  selectedStatus,
  setSelectedStatus,

  onReset,
  onAddMember,
}) => {
  return (
    <div className={styles.toolbar}>
      {/* Search */}

      <div className={styles.searchBox}>
        <FaSearch className={styles.icon} />

        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search by Name, Email, Phone or Member ID..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>

      {/* Course */}

      <select
        className={styles.select}
        value={selectedCourse}
        onChange={(e) =>
          setSelectedCourse(e.target.value)
        }
      >
        {courses.map((course) => (
          <option
            key={course}
            value={course}
          >
            {course}
          </option>
        ))}
      </select>

      {/* Status */}

      <select
        className={styles.select}
        value={selectedStatus}
        onChange={(e) =>
          setSelectedStatus(e.target.value)
        }
      >
        <option value="All">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
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
          onClick={onAddMember}
        >
          <FaPlus />
          Add Member
        </button>
      </div>
    </div>
  );
};

export default MembersToolbar;