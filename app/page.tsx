// # /

import css from './page.module.css';
import { Container } from '@/components/ui/Container/Container';

//*** */
import { getPopularStories } from '@/services/stories-api';
import PopularStoriesSection from '@/components/PopularStories/PopularStoriesSection/PopularStoriesSection';

export default async function Home() {
  // 1. Отримуємо відсортовані історії (топ-3 за популярністю)
  const popularStories = await getPopularStories();

  return (
    <main>
      <section style={{ background: '#f4f4f4', padding: '60px 0' }}>
        <Container>
          <h1 className={css.title}>
            Проект, створений для тих, хто живе подорожами
          </h1>

          <p style={{ marginTop: '20px', maxWidth: '600px' }}>
            Ми віримо, що кожна подорож — це унікальна історія, варта того, щоб
            нею поділилися. Наша платформа створена, щоб об&apos;єднати людей,
            закоханих у відкриття нового.
          </p>
        </Container>
      </section>
      {/* 2. Секція з популярними історіями */}
      <section className="popular">
        <Container>
          <PopularStoriesSection stories={popularStories} />
        </Container>
      </section>
    </main>
  );
}
