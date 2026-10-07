import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/images/librarylogo.png";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields.");
      return;
    }

    login({
      id: 1,
      name: "Administrator",
      email: formData.email,
      role: "Admin",
    });

    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <img
            src={logo}
            alt="Library Logo"
            className={styles.logo}
          />
        </div>

        <h1 className={styles.title}>Library Management</h1>

        <p className={styles.subtitle}>
          Login to access your dashboard
        </p>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className={styles.loginButton}
          >
            Login
          </button>
        </form>

        <div className={styles.links}>
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;