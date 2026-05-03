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
          <div className={styles.featureCard}>
            <h3>Subject Management</h3>
            <p className={styles.featuresDescription}>
              Keep your curriculum organized by categories, semesters, or priority levels, ensuring you never lose track of your academic requirements.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Smart Pomodoro Timer</h3>
            <p className={styles.featuresDescription}>
              Boost your productivity with a built-in focus timer that helps you maintain deep work sessions while managing necessary rest intervals.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Deep Work Analytics</h3>
            <p className={styles.featuresDescription}>
              Go beyond simple timers by tracking your peak productivity hours and identifying which subjects demand more of your mental energy.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Collaborative Sync</h3>
            <p className={styles.featuresDescription}>
              Easily share your study plans or notes with peers while keeping your personal progress private and securely backed up in the cloud.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Advanced Markdown Notes</h3>
            <p className={styles.featuresDescription}>
              Create rich, structured documentation for your classes with support for code blocks, mathematical formulas, and hierarchical organization.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Performance Analytics</h3>
            <p className={styles.featuresDescription}>
              Visualize your growth through detailed charts and statistics that track your study hours, completed tasks, and overall grade evolution.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Interactive Kanban Boards</h3>
            <p className={styles.featuresDescription}>
              Manage your assignments and projects using a dynamic drag-and-drop system to monitor what is pending, in progress, and completed.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Exam Preparation Hub</h3>
            <p className={styles.featuresDescription}>
              Access specialized modules designed to help you organize mock exams, review sessions, and long-term preparation for major technical assessments.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Space Repetition System</h3>
            <p className={styles.featuresDescription}>
              Built-in review cycles based on cognitive science to ensure your notes move from short-term to long-term memory effectively.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.howItWorks}>
        <h2>How it works</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.step}>
            <span>01</span>
            <h3>Create your Space</h3>
            <p>Setup your subjects, goals, and academic calendar in minutes.</p>
          </div>
          <div className={styles.step}>
            <span>02</span>
            <h3>Organize & Study</h3>
            <p>Use the integrated workspace to take notes and manage your focus sessions.</p>
          </div>
          <div className={styles.step}>
            <span>03</span>
            <h3>Track Results</h3>
            <p>Monitor your performance with real-time data and reach your academic milestones.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to upgrade your study routine?</h2>
        <p>Join other students and start organizing your future today.</p>
        <Button name="Get Started for Free" />
      </section>
    </>
  )
}

export default Home;