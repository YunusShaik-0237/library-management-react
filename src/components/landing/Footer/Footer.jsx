import {
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>

        {/* Company Info */}
        <div className={styles.section}>
          <h2>📚 LibraryHub</h2>

          <p>
            Smart Library Management System
            built with React, Express and MongoDB.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#stats">Statistics</a>
          <a href="#footer">Contact</a>
        </div>

        {/* Contact */}
        <div className={styles.section}>
          <h3>Contact</h3>

          <p>
            <FaEnvelope /> support@libraryhub.com
          </p>

          <p>
            <FaPhoneAlt /> +91 939 096 0237
          </p>
        </div>

      </div>

      <div className={styles.bottom}>
        © 2026 LibraryHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;