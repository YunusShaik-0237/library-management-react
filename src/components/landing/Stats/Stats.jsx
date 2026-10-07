import {
  FaBook,
  FaUsers,
  FaExchangeAlt,
  FaStar,
} from "react-icons/fa";

import styles from "./Stats.module.css";

const stats = [
  {
    icon: <FaBook />,
    number: "5000+",
    title: "Books",
  },
  {
    icon: <FaUsers />,
    number: "1200+",
    title: "Members",
  },
  {
    icon: <FaExchangeAlt />,
    number: "300+",
    title: "Daily Issues",
  },
  {
    icon: <FaStar />,
    number: "99%",
    title: "Satisfaction",
  },
];

const Stats = () => {
  return (
    <section id="stats" className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>OUR IMPACT</span>

          <h2>Trusted by Thousands</h2>

          <p>
            Our library management system helps institutions
            manage books, members and daily operations efficiently.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((item) => (
            <div className={styles.card} key={item.title}>
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;