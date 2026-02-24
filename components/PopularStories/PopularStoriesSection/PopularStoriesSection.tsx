import Link from 'next/link';
import PopularStories from '../PopularStories';

import styles from './PopularStoriesSection.module.css';
import { Story } from '@/app/types/story';

interface Props {
  stories: Story[];
}

export default function PopularStoriesSection({ stories }: Props) {
  return (
    <section className={styles.section}>
      <PopularStories stories={stories} title="Популярні історії" />

      <div className={styles.buttonWrapper}>
        <Link href="/stories" className={styles.viewAllBtn}>
          Переглянути всі
        </Link>
      </div>
    </section>
  );
}
