'use client'; // Обов'язково, бо використовуємо useState

import { useState, useEffect } from 'react';

import { Container } from '@/components/ui/Container/Container';
import Logo from '@/components/ui/Logo/Logo';
import { MainNav } from '@/components/navigation/MainNav/MainNav';
import { AuthActions } from '@/components/auth/AuthActions/AuthActions';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Блокування скролу при відкритому меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          {/* Контейнер для навігації та кнопок */}
          {/* Додаємо динамічний клас для відкриття меню на мобайлі */}
          <div
            className={`${styles.headerContent} ${isMenuOpen ? styles.isOpen : ''}`}
          >
            {/* Передаємо closeMenu, щоб меню закривалося при кліку на посилання */}
            <MainNav onItemClick={closeMenu} />
            <AuthActions onItemClick={closeMenu} />
          </div>
          {/* Кнопка бургер-меню (видима тільки на мобайл/таблет) */}
          <button
            className={styles.burgerBtn}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'} {/* Можна замінити на SVG іконки */}
          </button>
        </div>
      </Container>
    </header>
  );
}
