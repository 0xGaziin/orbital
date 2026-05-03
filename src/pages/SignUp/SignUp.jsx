import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import styles from './SignUp.module.css';

function SignUp() {
  return (
    <>
      <Header />

      <div className={styles.registerArea}>
        <h1>Sign Up</h1>
        <p>This is your first step.</p>

        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="E-mail (optional)" />
          <input type="password" placeholder="Password"/>
        </form>

        <p className={styles.warning}>
          By creating an account, you agree to our Terms.
        </p>
      </div>
    </>
  )
}

export default SignUp;