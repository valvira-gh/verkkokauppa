import styles from "./header.module.css";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Verkkokauppa</h1>
      <div className={styles.navWrapper}>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
