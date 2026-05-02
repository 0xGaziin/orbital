import styles from './Button.module.css';

function Button({ content }) {
  return (
    <button className={styles.accessButton}>{content}</button>
  )  
}

export default Button;