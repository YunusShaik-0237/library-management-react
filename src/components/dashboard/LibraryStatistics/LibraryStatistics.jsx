import styles from "./LibraryStatistics.module.css";

const statistics = [
  {
    title: "Book Categories",
    value: 12,
    percentage: 75,
    color: "#2563eb",
  },
  {
    title: "Available Books",
    value: 280,
    percentage: 90,
    color: "#16a34a",
  },
  {
    title: "Issued Books",
    value: 95,
    percentage: 45,
    color: "#ea580c",
  },
  {
    title: "Active Members",
    value: 180,
    percentage: 80,
    color: "#7c3aed",
  },
];

const LibraryStatistics = () => {
  return (
    <section className={styles.statistics}>
      <div className={styles.header}>
        <h2>Library Statistics</h2>
        <p>
          Overview of your library performance.
        </p>
      </div>

      <div className={styles.container}>
        {statistics.map((item) => (
          <div
            key={item.title}
            className={styles.card}
          >
            <div className={styles.top}>
              <span>{item.title}</span>

              <strong>{item.value}</strong>
            </div>

            <div className={styles.progress}>
              <div
                className={styles.fill}
                style={{
                  width: `${item.percentage}%`,
                  background: item.color,
                }}
              />
            </div>

            <div className={styles.bottom}>
              <span>{item.percentage}%</span>

              <span>Completed</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LibraryStatistics;