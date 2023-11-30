// components/Navbar.js
import Link from 'next/link';
import styles from './navbar.module.css';
import utilStyles from '../styles/utils.module.css';

const Navigationbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navbar}>
        {/* <li>
          <Link href="/">
            <h1>Home</h1>
          </Link>
        </li>  */}
        <li>
          <Link href="/api/auth/signin/">
            <h1>login</h1>
          </Link>
        </li>
        
        <li>
          <Link href="/personaltrainer/addexercise">
            <h1>Opret en exercise</h1>
          </Link>
        </li>
        <li>
          <Link href="/personaltrainer/client">
            <h1>Opret en bruger</h1>
          </Link>
        </li>
        <li>
          <Link href="/personaltrainer/createprogram">
            <h1>Opret ny program for bruger</h1>
          </Link>
        </li>
        <li>
          <Link href="/personaltrainer/programlist">
            <h1>Se listen af workout programmer</h1>
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navigationbar;
