import Navbar from "../../components/landing/Navbar/Navbar";
import Hero from "../../components/landing/Hero/Hero";
import Features from "../../components/landing/Features/Features";
import Stats from "../../components/landing/Stats/Stats";
import CTA from "../../components/landing/CTA/CTA";
import Footer from "../../components/landing/Footer/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats/>
      <CTA/>
      <Footer/>
    </>
  );
};

export default Landing;
