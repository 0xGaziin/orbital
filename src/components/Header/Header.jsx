import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import Search from '../Search/Search.jsx';
import Button from '../Button/Button.jsx';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerSection}>
      <div className={styles.main}>
        <h3>Orbital</h3>
        <Search placeholder='Search for materials, notes...' />
      </div>

      <div className={styles.configuration}>
        <Button className={styles.btnIcon}>
          <IoNotificationsOutline size={16} />
          <span className={styles.badge}></span>
        </Button>
        
        <Button className={styles.btnProfile}>
          <IoPersonOutline size={8} color="white" />
        </Button>
      </div>
    </header>
  )
}

export default Header;