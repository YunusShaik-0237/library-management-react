import styles from "./Button.module.css";

const Button = ({
  label,
  type = "button",
  onClick,
  className = "",
  disabled = false,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}
    >
      {children || label}
    </button>
  );
};

export default Button;