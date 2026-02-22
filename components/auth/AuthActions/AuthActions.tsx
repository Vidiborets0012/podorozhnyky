import Link from 'next/link';
import clsx from 'clsx';
import styles from './AuthActions.module.css';

export function AuthActions() {
  return (
    <ul className={styles.actionsList}>
      <li className={styles.actionsItem}>
        <Link
          href="/auth/login"
          className={clsx(styles.actionsLink, styles.transparent)}
        >
          Вхід
        </Link>
      </li>
      <li className={styles.actionsItem}>
        <Link
          href="/auth/register"
          className={clsx(styles.actionsLink, styles.white)}
        >
          Реєстрація
        </Link>
      </li>
    </ul>
  );
}
