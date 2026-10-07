import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import styles from "./ReturnTable.module.css";

const ReturnTable = ({
  returns,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Return ID</th>
            <th>Book</th>
            <th>Member</th>
            <th>Issue Date</th>
            <th>Return Date</th>
            <th>Fine</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {returns.length === 0 ? (
            <tr>
              <td
                colSpan="8"
                className={styles.noData}
              >
                No returned books found.
              </td>
            </tr>
          ) : (
            returns.map((item) => (
              <tr key={item.id}>
                <td>{item.returnId}</td>

                <td>{item.bookTitle}</td>

                <td>{item.memberName}</td>

                <td>{item.issueDate}</td>

                <td>{item.returnDate}</td>

                <td>₹{item.fine}</td>

                <td>
                  <span
                    className={`${styles.badge} ${styles.returned}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  <div className={styles.actions}>
                    <button
                      className={styles.viewBtn}
                      onClick={() =>
                        onView(item)
                      }
                    >
                      <FaEye />
                    </button>

                    <button
                      className={styles.editBtn}
                      onClick={() =>
                        onEdit(item)
                      }
                    >
                      <FaEdit />
                    </button>

                    <button
                      className={styles.deleteBtn}
                      onClick={() =>
                        onDelete(item)
                      }
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

export default ReturnTable;