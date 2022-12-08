// Importing dependencies
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero/Hero";
import Content from "../components/Content/Content";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}
