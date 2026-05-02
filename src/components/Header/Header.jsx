import Search from '../Search/Search.jsx';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <h3>Orbital</h3>
      <Search placeholder='Search for materials, notes...' />

      <div className={styles.configuration}>
        <button className='notification'>Notifications</button>
        <button className='profile'>My Profile</button>
      </div>
    </header>
  )
}

export default Header;