import styles from "./Input.module.css";

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  className = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`${styles.input} ${className}`}
    />
  );
};

export default Input;