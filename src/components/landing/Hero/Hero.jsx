import { motion } from "framer-motion";
import Button from "../../common/Button";
import heroImage from "../../../assets/images/library-hero.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>📚 Modern Digital Library</span>

          <h1>
            Smart Library
            <br />
            Management System
          </h1>

          <p>
            Simplify book management, member records, issue & return tracking
            with an elegant, secure and modern platform.
          </p>

          <div className={styles.buttons}>
            <Button label="Get Started" className={styles.primaryBtn} />

            <Button label="Learn More" className={styles.secondaryBtn} />
          </div>

          <div className={styles.stats}>
            <div>
              <h3>5000+</h3>
              <span>Books</span>
            </div>

            <div>
              <h3>1200+</h3>
              <span>Members</span>
            </div>

            <div>
              <h3>99%</h3>
              <span>Availability</span>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImage} alt="Library Hero" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
