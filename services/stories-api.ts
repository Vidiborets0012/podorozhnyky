import { Story } from '@/app/types/story';
import api from './api-instance';

interface StoriesResponse {
  data: Story[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// export const getPopularStories = async (): Promise<Story[]> => {
//   // Запитуємо більше історій, щоб було з чого вибрати найпопулярніші
//   // або просто беремо першу сторінку (10 штук за замовчуванням)
//   const { data } = await api.get<StoriesResponse>('/stories');

//   // Контролер повертає { data: [...], pagination: {...} }
//   // Сортуємо за популярністю на фронті, оскільки бек сортує за датою
//   return data.data
//     .sort((a, b) => (b.favoriteCount || 0) - (a.favoriteCount || 0))
//     .slice(0, 3);
//   // .sort((a, b) => b.favoriteCount - a.favoriteCount)
//   //   .slice(0, 3);
// };

export const getPopularStories = async (): Promise<Story[]> => {
  // запит саме на 3 найпопулярніші історії
  const { data } = await api.get<StoriesResponse>(
    '/stories?limit=3&sortBy=popular',
  );

  // Бекенд вже все відсортував і обрізав до 3-х штук
  return data.data;
};
