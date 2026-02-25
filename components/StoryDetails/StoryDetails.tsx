import Image from 'next/image';
import styles from './StoryDetails.module.css';
import { Story } from '@/app/types/story';

interface StoryDetailsProps {
  story: Story;
  isSaved: boolean;
}

export default function StoryDetails({ story, isSaved }: StoryDetailsProps) {
  // Створюємо безпечні змінні для рендеру
  // Перевіряємо, чи є ownerId об'єктом, а не просто string
  // const authorName =
  //   typeof story.ownerId === 'object' ? story.ownerId.name : 'Невідомий автор';
  // const categoryName =
  //   typeof story.category === 'object' ? story.category.name : 'Мандрівка';
  // if (!story) return null;
  if (!story || !story.img) return null;
  // if (!story) {
  //   return <div>Завантаження даних історії...</div>;
  // }
  return (
    <article className={styles.article}>
      {/* 1. Заголовок історії */}
      <h1 className={styles.title}>{story.title}</h1>

      {/* 2. Мета-дані: Автор, Дата, Країна */}
      <div className={styles.meta}>
        <div className={styles.infoGroup}>
          <p className={styles.metaItem}>
            <strong>Автор статті:</strong> {story.ownerId?.name || 'Мандрівник'}
          </p>
          <p className={styles.metaItem}>
            <strong>Опубліковано:</strong> {story.date}
          </p>
        </div>
        <span className={styles.categoryBadge}>{story.category?.name}</span>
      </div>

      {/* 3. Головне зображення */}
      <div className={styles.imageWrapper}>
        <Image
          src={story.img}
          alt={story.title}
          fill
          priority
          sizes="100vw"
          className={styles.mainImage}
        />
        {/* {story.img && story.img.trim() !== '' ? (
          <Image
            src={story.img}
            alt={story.title || 'Story image'}
            fill
            priority
            className={styles.mainImage}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            Зображення завантажується...
          </div>
        )} */}
      </div>

      {/* 4. Контентна частина: Текст + Блок збереження */}
      <div className={styles.contentGrid}>
        <div className={styles.textBlock}>{story.article}</div>

        <aside className={styles.saveAside}>
          <div className={styles.saveCard}>
            <h3 className={styles.saveTitle}>Збережіть собі історію</h3>
            <p className={styles.saveText}>
              Вона буде доступна у вашому профілі у розділі збережене
            </p>
            {/* Кнопка — тут буде логіка запиту */}
            <button
              className={`${styles.saveButton} ${isSaved ? styles.saved : ''}`}
            >
              {isSaved ? 'Збережено' : 'Зберегти'}
            </button>
          </div>
        </aside>
      </div>
    </article>
  );
}
