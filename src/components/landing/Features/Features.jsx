import {
  FaBookOpen,
  FaUsers,
  FaExchangeAlt,
} from "react-icons/fa";

import FeatureCard from "../../ui/FeatureCard";
import styles from "./Features.module.css";

const features = [
  {
    icon: <FaBookOpen />,
    title: "Book Management",
    description:
      "Organize thousands of books with categories, search and inventory management.",
  },

  {
    icon: <FaUsers />,
    title: "Member Management",
    description:
      "Maintain student and faculty records with an easy-to-use interface.",
  },

  {
    icon: <FaExchangeAlt />,
    title: "Issue & Return",
    description:
      "Track borrowed books, due dates and return history effortlessly.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className={styles.features}
    >
      <div className={styles.container}>

        <div className={styles.heading}>

          <span>OUR FEATURES</span>

          <h2>
            Why Choose LibraryHub?
          </h2>

          <p>
            Everything you need to manage a modern
            library from one simple dashboard.
          </p>

        </div>

        <div className={styles.cards}>

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;