import { StoriesResponse, Story, StoryDetailResponse } from '@/app/types/story';
import api from './api';

// Базова універсальна функція (Utility function)
// не експортуємо, вона потрібна тільки всередині цього файлу
const fetchStories = async (params = {}): Promise<Story[]> => {
  try {
    // Очікуємо відповідь у форматі StoriesResponse
    const { data } = await api.get<StoriesResponse>('/stories', {
      params,
      timeout: 10000,
    });
    return data.data;
  } catch (error) {
    console.error('Бекенд тимчасово недоступний (502/500)');
    return []; // Повертаємо порожній масив, щоб сторінка завантажилася без карток
  }
};

// Семантичні іменовані експорти (API functions)
// Саме ці функції будуть викликатися в компонентах
export const getPopularStories = () =>
  fetchStories({ limit: 4, sortBy: 'popular' });

// функція для отримання конкретної історії
// export const getStoryById = async (storyId: string) => {
//   try {
//     const { data } = await api.get<{ data: StoryDetailResponse }>(
//       `/stories/${storyId}`,
//       {
//         timeout: 10000,
//       },
//     );

//     // Повертаємо структуру, яку очікує компонент StoryPage
//     return {
//       story: data.data.data, // Сама історія
//       isSaved: data.data.isSaved, // Статус збереження
//       popularStories: data.data.popularStories, // Популярні
//     };
//   } catch (error) {
//     console.error(`Помилка завантаження історії ${storyId}:`, error);
//     // Повертаємо null-структуру, щоб уникнути помилок рендерингу
//     return {
//       story: null,
//       isSaved: false,
//       popularStories: [],
//     };
//   }
// };

export const getStoryById = async (storyId: string) => {
  try {
    // Отримуємо відповідь. Axios кладе тіло відповіді в поле 'data'
    // const response = await api.get<{ data: StoryDetailResponse }>(
    //   `/stories/${storyId}`,
    //   { timeout: 10000 },
    // );
    const { data } = await api.get(`/stories/${storyId}`, { timeout: 10000 });

    // const result = response.data.data;

    // Перевіряємо структуру через консоль (тільки для дебагу в терміналі)
    // console.log('Full Backend Response:', result);

    return {
      story: data || null, // Об'єкт історії
      // Якщо бекенд не віддає ці поля в цьому запиті, ставимо дефолтні
      isSaved: data.isSaved ?? false, // Статус для кнопки
      popularStories: data.popularStories ?? [], // Масив для секції Popular
    };
  } catch (error) {
    console.error(`Помилка завантаження історії ${storyId}:`, error);
    return {
      story: null,
      isSaved: false,
      popularStories: [],
    };
  }
};
