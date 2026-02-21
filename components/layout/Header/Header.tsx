'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import styles from './Header.module.css';

export default function Header() {
  const isAuth = false; // тимчасово

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            🌿 Подорожники
          </Link>

          {/* Navigation */}
          <nav className={styles.nav}>
            <Link href="/">Головна</Link>
            <Link href="/stories">Історії</Link>
            <Link href="/travelers">Мандрівники</Link>
          </nav>

          {/* Auth buttons */}
          {!isAuth && (
            <div className={styles.auth}>
              <Link href="/auth/login" className={styles.login}>
                Вхід
              </Link>
              <Link href="/auth/register" className={styles.register}>
                Реєстрація
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
