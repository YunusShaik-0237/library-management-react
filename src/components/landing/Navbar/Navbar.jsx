import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import Button from "../../common/Button";
import styles from "./Navbar.module.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "#features" },
  { name: "Statistics", path: "#statistics" },
  { name: "Contact", path: "#footer" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          📚 <span>LibraryHub</span>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <div className={styles.loginContainer}>
          <Button
            label="Login"
            className={styles.loginBtn}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Button
              label="Login"
              className={styles.mobileLoginBtn}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;