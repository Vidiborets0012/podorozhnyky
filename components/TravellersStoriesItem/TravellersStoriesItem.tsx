'use client';

import Link from 'next/link';
import styles from './TravellersStoriesItem.module.css';
import { Story } from '@/app/types/story';
import Image from 'next/image';

interface ItemProps {
  story: Story;
  isLoggedIn?: boolean; // Додаємо для логіки модалки
  onOpenAuthModal?: () => void;
}

export default function TravellersStoriesItem({
  story,
  isLoggedIn,
  onOpenAuthModal,
}: ItemProps) {
  // Використовуємо Type Assertion (as), щоб переконати TS, що поля вже populated
  const owner = story.ownerId as { name: string; avatarUrl?: string };
  const category = story.category as { name: string };

  const handleBookmarkClick = () => {
    if (!isLoggedIn && onOpenAuthModal) {
      onOpenAuthModal(); // Вимога ТЗ для неавторизованих
    } else {
      // Логіка додавання в збережені
    }
  };

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
      {/* <img src={story.img} alt={story.title} className={styles.mainImage} /> */}
      <div className={styles.imageWrapper}>
        <Image
          src={story.img}
          alt={story.title}
          // width={400}
          // height={200}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1439px) 25vw, 33vw"
          className={styles.mainImage}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{categoryName}</span>

        <h3 className={styles.title}>{story.title}</h3>

        <p className={styles.articlePreview}>
          {story.article.substring(0, 120)}...
        </p>

        <div className={styles.authorLine}>
          {/* <img src={authorAvatar} className={styles.avatar} alt={authorName} /> */}
          <Image
            src={authorAvatar}
            alt={authorName}
            width={32}
            height={32}
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <span className={styles.name}>{authorName}</span>
            <span className={styles.dateDetails}>
              {story.date}•{story.favoriteCount}{' '}
              <svg width="16" height="16">
                <use href="/sprite.svg#icon-bookmark" />
              </svg>
            </span>
          </div>
        </div>

        <div className={styles.cardActions}>
          <Link href={`/stories/${story._id}`} className={styles.readBtn}>
            Переглянути статтю
          </Link>
          <button className={styles.bookmarkBtn} onClick={handleBookmarkClick}>
            <svg className="bookmarkIcon" width="24" height="24">
              <use href="/sprite.svg#icon-bookmark" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
