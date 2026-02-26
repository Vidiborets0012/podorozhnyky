// # /stories/:storyId
// import { getStoryById } from '@/services/stories-api';
// import PopularStoriesSection from '@/components/PopularStoriesSection';
// import StoryDetails from '@/components/StoryDetails/StoryDetails';

import PopularStoriesSection from '@/components/PopularStories/PopularStoriesSection/PopularStoriesSection';
import { Container } from '@/components/ui/Container/Container';
import styles from './StoryPage.module.css';
import { getStoryById } from '@/app/lib/api/serverApi';
import StoryDetails from '@/components/StoryDetails/StoryDetails';

interface Props {
  params: { storyId: string };
}

export default async function StoryPage({ params }: Props) {
  // 1. Отримуємо ID з параметрів URL
  const { storyId } = await params;

  // 2. Запит до API (виконується на сервері)
  const { story, isSaved, popularStories } = await getStoryById(storyId);

  // 2. Перевірка на випадок помилки або відсутності історії
  if (!story) {
    return (
      <div className={styles.pageWrapper}>
        {/* <Container> */}
        <div className="container">
          <p>Вибачте, історію не знайдено або бекенд тимчасово недоступний.</p>
        </div>
        {/* </Container> */}
      </div>
    );
  }
  // console.log('RENDER DATA:', story);
  return (
    <div className={styles.pageWrapper}>
      {/* <section className={styles.detailsSection}> */}
      {/* <Container> */}
      {/* Передаємо story.data, бо саме там лежать title, img, article */}
      {/* <StoryDetails story={story} isSaved={isSaved} /> */}
      <StoryDetails story={story.data} isSaved={story.isSaved} />
      {/* </Container> */}
      {/* </section> */}

      <section className={styles.popularSection}>
        <Container>
          <PopularStoriesSection stories={popularStories} />
        </Container>
      </section>
    </div>
  );
}
