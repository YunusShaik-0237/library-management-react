import {
  FaUserGraduate,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import styles from "./MemberTable.module.css";

const MemberTable = ({
  members,
  highlightedId,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Member</th>
            <th>Name</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Books</th>
            <th>Fine</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {members.length > 0 ? (
            members.map((member) => (
              <tr
                key={member.id}
                className={
                  highlightedId === member.id
                    ? styles.highlightRow
                    : ""
                }
              >
                {/* Avatar */}
                <td>
                  <div className={styles.avatar}>
                    <FaUserGraduate />
                  </div>
                </td>

                {/* Name */}
                <td>
                  <div className={styles.memberInfo}>
                    <h4>{member.name}</h4>

                    <span>{member.memberId}</span>
                  </div>
                </td>

                {/* Course */}
                <td>{member.course}</td>

                {/* Phone */}
                <td>{member.phone}</td>

                {/* Books */}
                <td>
                  {member.booksIssued} / {member.maxBooks}
                </td>

                {/* Fine */}
                <td>
                  {member.fine > 0 ? (
                    <span className={styles.fine}>
                      ₹{member.fine}
                    </span>
                  ) : (
                    <span className={styles.noFine}>
                      ₹0
                    </span>
                  )}
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`${styles.status} ${
                      member.status === "Active"
                        ? styles.active
                        : styles.inactive
                    }`}
                  >
                    {member.status}
                  </span>
                </td>

                {/* Actions */}
                <td>
                  <div className={styles.actions}>
                    <button
                      className={`${styles.actionBtn} ${styles.view}`}
                      onClick={() => onView(member)}
                      title="View"
                    >
                      <FaEye />
                    </button>

                    <button
                      className={`${styles.actionBtn} ${styles.edit}`}
                      onClick={() => onEdit(member)}
                      title="Edit"
                    >
                      <FaEdit />
                    </button>

                    <button
                      className={`${styles.actionBtn} ${styles.delete}`}
                      onClick={() => onDelete(member)}
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
                className={styles.empty}
              >
                No Members Found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;