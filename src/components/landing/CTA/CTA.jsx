import { motion } from "framer-motion";
import Button from "../../common/Button";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Modernize Your Library?</h2>

        <p>
          Join thousands of institutions using
          LibraryHub to simplify book management,
          member tracking and daily library operations.
        </p>

        <Button
          label="Get Started Today"
          className={styles.ctaButton}
        />
      </motion.div>
    </section>
  );
};

export default CTA;