import Link from 'next/link';
import LogoIcon from './LogoIcon';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <LogoIcon />
      <span className={styles.text}>Подорожники</span>
    </Link>
  );
}
