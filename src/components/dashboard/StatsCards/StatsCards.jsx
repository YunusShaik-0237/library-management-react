import {
  FaBook,
  FaUsers,
  FaExchangeAlt,
  FaUndo,
  FaCheckCircle,
} from "react-icons/fa";

import booksData from "../../../data/booksData";
import membersData from "../../../data/membersData";
import issuesData from "../../../data/issuesData";
import returnsData from "../../../data/returnsData";

import styles from "./StatsCards.module.css";

const StatsCards = () => {
  const totalBooks = booksData.length;
  const totalMembers = membersData.length;
  const issuedBooks = issuesData.length;
  const returnedBooks = returnsData.length;
  const availableBooks = totalBooks - issuedBooks + returnedBooks;

  const cards = [
    {
      title: "Total Books",
      value: totalBooks,
      icon: <FaBook />,
      color: styles.blue,
    },
    {
      title: "Members",
      value: totalMembers,
      icon: <FaUsers />,
      color: styles.green,
    },
    {
      title: "Issued Books",
      value: issuedBooks,
      icon: <FaExchangeAlt />,
      color: styles.orange,
    },
    {
      title: "Returned Books",
      value: returnedBooks,
      icon: <FaUndo />,
      color: styles.purple,
    },
    {
      title: "Available Books",
      value: availableBooks,
      icon: <FaCheckCircle />,
      color: styles.teal,
    },
  ];

  return (
    <div className={styles.cards}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${styles.card} ${card.color}`}
        >
          <div className={styles.icon}>
            {card.icon}
          </div>

          <div className={styles.content}>
            <h3>{card.title}</h3>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;