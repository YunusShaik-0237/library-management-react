import styles from "./ActivityChart.module.css";

const ActivityChart = () => {
  const weeklyData = [
    { day: "Mon", value: 140 },
    { day: "Tue", value: 90 },
    { day: "Wed", value: 180 },
    { day: "Thu", value: 120 },
    { day: "Fri", value: 160 },
    { day: "Sat", value: 100 },
    { day: "Sun", value: 60 },
  ];

  return (
    <div className={styles.card}>
      <h2>Weekly Activity</h2>

      <div className={styles.chart}>
        {weeklyData.map((item) => (
          <div
            key={item.day}
            className={styles.barContainer}
          >
            <div
              className={styles.bar}
              style={{ height: `${item.value}px` }}
            ></div>

            <span>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;