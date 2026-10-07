import styles from "../landing/Features/Features.module.css";

const FeatureCard = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>

      <div className={styles.icon}>
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
};

export default FeatureCard;