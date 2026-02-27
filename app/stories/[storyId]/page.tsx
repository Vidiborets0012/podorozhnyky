// # /stories/:storyId

// import PopularStoriesSection from '@/components/PopularStories/PopularStoriesSection/PopularStoriesSection';
// import { Container } from '@/components/ui/Container/Container';

import { getStoryById } from '@/app/lib/api/serverApi';
// import { getTopStoriesServer } from '@/app/lib/api/anotherDevApi'; // припустимий шлях до функцій
// import PopularStories from '@/components/PopularStories;
import StoryDetails from '@/components/StoryDetails/StoryDetails';

interface Props {
  params: { storyId: string };
}

export default async function StoryPage({ params }: Props) {
  // 1. Отримуємо ID з параметрів URL
  const { storyId } = await params;

  // 2. Запит до API (виконується на сервері)
  // const { story, isSaved, popularStories } = await getStoryById(storyId);

  // 2. Паралельне завантаження: власна стаття та глобальний ТОП-3
  // Запускаємо обидва проміси одночасно
  const [storyRes] = await Promise.all([
    getStoryById(storyId),
    // getTopStoriesServer(3),
  ]);
  // const [storyRes, topStoriesRes] = await Promise.all([
  //   getStoryById(storyId),
  //   getTopStoriesServer(3),
  // ]);

  // 2. Перевірка на випадок помилки або відсутності історії
  // if (!story) {
  //   return (
  //     <div className={styles.pageWrapper}>
  //       <div className="container">
  //         <p>Вибачте, історію не знайдено або бекенд тимчасово недоступний.</p>
  //       </div>
  //     </div>
  //   );
  // }
  // 3. Перевірка наявності основної історії
  if (!storyRes.story || !storyRes.story.data) {
    return (
      <>
        <div className="container">
          <p>Вибачте, історію не знайдено або сервер недоступний.</p>
        </div>
      </>
    );
  }
  // console.log('RENDER DATA:', story);
  return (
    <>
      {/* компонент детальної сторінки */}
      <StoryDetails story={storyRes.story.data} isSaved={storyRes.isSaved} />
      {/* <StoryDetails story={story.data} isSaved={story.isSaved} /> */}

      {/* Передаємо дані, отримані з getTopStoriesServer */}
      {/* <PopularStories stories={topStoriesRes.data} /> */}

      {/* <section className={styles.popularSection}>
        <Container>
          <PopularStoriesSection stories={popularStories} />
        </Container>
      </section> */}
    </>
  );
}
