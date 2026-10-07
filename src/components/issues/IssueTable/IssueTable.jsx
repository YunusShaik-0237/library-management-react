import {
  FaEye,
  FaEdit,
  FaUndoAlt,
  FaTrash,
} from "react-icons/fa";

import styles from "./IssueTable.module.css";

const IssueTable = ({
  issues,
  onView,
  onEdit,
  onReturn,
  onDelete,
}) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Issue ID</th>
            <th>Book</th>
            <th>Member</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Fine</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {issues.length === 0 ? (
            <tr>
              <td
                colSpan="8"
                className={styles.noData}
              >
                No issue records found.
              </td>
            </tr>
          ) : (
            issues.map((issue) => (
              <tr key={issue.id}>
                <td>{issue.issueId}</td>

                <td>{issue.bookTitle}</td>

                <td>{issue.memberName}</td>

                <td>{issue.issueDate}</td>

                <td>{issue.dueDate}</td>

                <td>₹{issue.fine}</td>

                <td>
                  <span
                    className={`${styles.badge} ${
                      issue.status === "Issued"
                        ? styles.issued
                        : issue.status === "Returned"
                        ? styles.returned
                        : styles.overdue
                    }`}
                  >
                    {issue.status}
                  </span>
                </td>

                <td>
                  <div className={styles.actions}>
                    <button
                      className={styles.viewBtn}
                      onClick={() => onView(issue)}
                    >
                      <FaEye />
                    </button>

                    <button
                      className={styles.editBtn}
                      onClick={() => onEdit(issue)}
                    >
                      <FaEdit />
                    </button>

                    {issue.status !== "Returned" && (
                      <button
                        className={styles.returnBtn}
                        onClick={() => onReturn(issue)}
                      >
                        <FaUndoAlt />
                      </button>
                    )}

                    <button
                      className={styles.deleteBtn}
                      onClick={() => onDelete(issue)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default IssueTable;