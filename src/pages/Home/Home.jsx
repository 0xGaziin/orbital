import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <Header />
      
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          Imagine the best way to organize your studies
        </h1>

        <p className={styles.heroSubtitle}>
          The complete platform to manage your subjects, notes, and academic progress all in one place.
        </p>

        <div className={styles.actions}>
          <button>Start Now</button>
          <button>Find Out More</button>
        </div>
      </section>
    </>
  )
}

export default Home;