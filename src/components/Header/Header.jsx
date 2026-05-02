import Search from '../Search/Search.jsx';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerSection}>
      <div className={styles.main}>
        <h3>Orbital</h3>
        <Search placeholder='Search for materials, notes...' />
      </div>
      

      <div className={styles.configuration}>
        <button className='notification'>Notifications</button>
        <button className='profile'>My Profile</button>
      </div>
    </header>
  )
}

export default Header;