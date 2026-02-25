import Link from 'next/link';
import styles from './MainNav.module.css';

interface MainNavProps {
  onItemClick?: () => void; // Опціональний пропс для закриття меню
}

export const MainNav = ({ onItemClick }: MainNavProps) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" onClick={onItemClick} className={styles.navLink}>
            Головна
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/stories"
            onClick={onItemClick}
            className={styles.navLink}
          >
            Історії
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/travellers"
            onClick={onItemClick}
            className={styles.navLink}
          >
            Мандрівники
          </Link>
        </li>
      </ul>
    </nav>
  );
};
