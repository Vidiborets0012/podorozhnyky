import Image from 'next/image';
import styles from './StoryDetails.module.css';
import { Story } from '@/app/types/story';
import Button from '@/components/Button/Button';

interface StoryDetailsProps {
  story: Story;
  isSaved: boolean;
}

export default function StoryDetails({ story, isSaved }: StoryDetailsProps) {
  if (!story || !story.img) return null;

  return (
    <article className={styles.article}>
      <div className="container">
        {/* 1. Заголовок історії */}
        <h1 className={styles.title}>{story.title}</h1>

        {/* 2. Мета-дані: Автор, Дата, Країна */}
        <div className={styles.meta}>
          <div className={styles.metaInfoInner}>
            <div className={styles.infoGroup}>
              <p className={styles.metaItem}>
                <span className={styles.metaItemStrong}>Автор статті:</span>
                <span className={styles.metaItemGeneral}>
                  {story.ownerId?.name || 'Мандрівник'}
                </span>
              </p>
              <p className={styles.metaItem}>
                <span className={styles.metaItemStrong}>Опубліковано:</span>
                <span className={styles.metaItemGeneral}>{story.date}</span>
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
              sizes="(max-width: 767px) calc(100vw - 40px), 
         (max-width: 1439px) calc(100vw - 64px), 
         1312px"
              className={styles.mainImage}
            />
          </div>
        </div>

        {/* 4. Контентна частина: Текст + Блок збереження */}
        <div className={styles.contentGrid}>
          <div className={styles.textBlock}>{story.article}</div>

          <aside className={styles.saveAside}>
            <div className={styles.saveCard}>
              <p className={styles.saveTitle}>Збережіть собі історію</p>
              <p className={styles.saveText}>
                Вона буде доступна у вашому профілі у розділі збережене
              </p>
              {/* Кнопка — тут буде логіка запиту */}
              <Button type="button" variant="primary">
                Зберегти
              </Button>
              {/* <button
                className={`${styles.saveButton} ${isSaved ? styles.saved : ''}`}
              >
                {isSaved ? 'Збережено' : 'Зберегти'}
              </button> */}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
