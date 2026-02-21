import { Container } from '@/components/ui/Container/Container';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <p>HEADER</p>
        </div>
      </Container>
    </header>
  );
}
