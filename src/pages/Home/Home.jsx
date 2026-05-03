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
          <Button name="Start Now"/>
          <Button name="Find Out More" />
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2>Why choose Orbital?</h2>
        <p className={styles.featuresDescription}>
          Orbital is a smart solution for your studies. It centralizes your academic life, allowing you to focus on what really matters: learning. Transform your productivity with tools designed for high-performance students.
        </p>

        <div className={styles.featuresGrid}>
          <h3>Subject Management</h3>
          <p>
            Keep your curriculum organized by categories, semesters, or priority levels, ensuring you never lose track of your academic requirements.
          </p>

          <h3>Smart Pomodoro Timer</h3>
          <p>
            Boost your productivity with a built-in focus timer that helps you maintain deep work sessions while managing necessary rest intervals.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home;