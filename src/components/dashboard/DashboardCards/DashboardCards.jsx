import {
  FaBook,
  FaUsers,
  FaExchangeAlt,
  FaUndo,
} from "react-icons/fa";

import styles from "./DashboardCards.module.css";

const cards = [
  {
    title: "Books",
    value: "1,250",
    growth: "+12%",
    icon: <FaBook />,
  },
  {
    title: "Members",
    value: "340",
    growth: "+8%",
    icon: <FaUsers />,
  },
  {
    title: "Issued",
    value: "120",
    growth: "+6%",
    icon: <FaExchangeAlt />,
  },
  {
    title: "Returned",
    value: "98",
    growth: "+10%",
    icon: <FaUndo />,
  },
];

const DashboardCards = () => {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <div
          className={styles.card}
          key={card.title}
        >
          <div className={styles.top}>
            <div className={styles.icon}>
              {card.icon}
            </div>

            <span className={styles.growth}>
              {card.growth}
            </span>
          </div>

          <h2>{card.value}</h2>

          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;