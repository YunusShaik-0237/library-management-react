import {
  FaMoneyBillWave,
  FaChartLine,
  FaExclamationTriangle,
  FaArrowUp,
} from "react-icons/fa";

import fineCollectionData from "../../../data/fineCollectionData";

import styles from "./FineCollectionSummary.module.css";

const FineCollectionSummary = () => {
  const {
    totalCollected,
    monthlyCollected,
    pendingFines,
    collectionRate,
    growth,
  } = fineCollectionData;

  return (
    <section className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Fine Collection Summary</h2>
        <p>Overview of library fine collections</p>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <FaMoneyBillWave />
          </div>

          <div>
            <h3>₹{totalCollected.toLocaleString()}</h3>
            <p>Total Collected</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FaChartLine />
          </div>

          <div>
            <h3>₹{monthlyCollected.toLocaleString()}</h3>
            <p>This Month</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FaExclamationTriangle />
          </div>

          <div>
            <h3>₹{pendingFines.toLocaleString()}</h3>
            <p>Pending Fines</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <span>Collection Rate</span>
          <span>{collectionRate}%</span>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${collectionRate}%` }}
          />
        </div>

        <div className={styles.growth}>
          <FaArrowUp />

          <span>
            {growth}% compared to last month
          </span>
        </div>
      </div>
    </section>
  );
};

export default FineCollectionSummary;