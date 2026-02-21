import { Container } from '@/components/ui/Container/Container';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <p>FOOTER</p>
        </div>
      </Container>
    </footer>
  );
}
