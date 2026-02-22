import Link from 'next/link';
import styles from './MainNav.module.css';

export function MainNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Головна
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/stories" className={styles.navLink}>
            Історії
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/travelers" className={styles.navLink}>
            Мандрівники
          </Link>
        </li>
      </ul>
    </nav>
  );
}
