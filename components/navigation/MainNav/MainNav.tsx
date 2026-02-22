import Link from 'next/link';
import styles from './MainNav.module.css';

export function MainNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Головна</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/stories">Історії</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/travelers">Мандрівники</Link>
        </li>
      </ul>
    </nav>
  );
}
