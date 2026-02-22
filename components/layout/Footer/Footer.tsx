import { Container } from '@/components/ui/Container/Container';
import styles from './Footer.module.css';
import Logo from '@/components/ui/Logo/Logo';
import { MainNav } from '@/components/navigation/MainNav/MainNav';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <Logo />

          <div className={styles.socials}>
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">X</a>
            <a href="#">YT</a>
          </div>

          <MainNav />
        </div>

        <div className={styles.divider} />

        <div className={styles.footerCopyright}>
          <p className={styles.footerCopyrightText}>
            © 2025 Подорожники. Усі права захищені.
          </p>
        </div>
      </Container>
    </footer>
  );
}
