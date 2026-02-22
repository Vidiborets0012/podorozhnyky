import { Container } from '@/components/ui/Container/Container';
import Logo from '@/components/ui/Logo/Logo';
import { MainNav } from '@/components/navigation/MainNav/MainNav';
import { AuthActions } from '@/components/auth/AuthActions/AuthActions';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          <div className={styles.headerContet}>
            <MainNav />
            <AuthActions />
          </div>
        </div>
      </Container>
    </header>
  );
}
