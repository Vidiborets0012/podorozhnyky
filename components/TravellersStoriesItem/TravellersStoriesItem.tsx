import Link from 'next/link';
import styles from './TravellersStoriesItem.module.css';
import { Story } from '@/app/types/story';

interface ItemProps {
  story: Story;
}

export default function TravellersStoriesItem({ story }: ItemProps) {
  // Використовуємо Type Assertion (as), щоб переконати TS, що поля вже populated
  const owner = story.ownerId as { name: string; avatarUrl?: string };
  const category = story.category as { name: string };

  const authorAvatar =
    typeof story.ownerId === 'object' && owner?.avatarUrl
      ? owner.avatarUrl
      : '/default-avatar.jpg';

  const authorName =
    typeof story.ownerId === 'object' && owner?.name
      ? owner.name
      : 'Мандрівник';

  const categoryName =
    typeof story.category === 'object' && category?.name
      ? category.name
      : 'Подорож';

  return (
    <div className={styles.card}>
      <img src={story.img} alt={story.title} className={styles.mainImage} />

      <div className={styles.content}>
        <span className={styles.category}>{categoryName}</span>

        <h3 className={styles.title}>{story.title}</h3>

        <p className={styles.articlePreview}>
          {story.article.substring(0, 120)}...
        </p>

        <div className={styles.authorLine}>
          <img src={authorAvatar} className={styles.avatar} alt={authorName} />
          <div className={styles.authorInfo}>
            <span className={styles.name}>{authorName}</span>
            <span className={styles.dateDetails}>
              {story.date}•{story.favoriteCount} 💬
            </span>
          </div>
        </div>

        <div className={styles.cardActions}>
          <Link href={`/stories/${story._id}`} className={styles.readBtn}>
            Переглянути статтю
          </Link>
          <button className={styles.bookmarkBtn}>
            <svg width="20" height="20">
              ...
            </svg>{' '}
            {/* Або іконка-шрифт */}
          </button>
        </div>
      </div>
    </div>
  );
}
