import { StoriesResponse, Story } from '@/app/types/story';
import api from './api';

// interface StoriesResponse {
//   data: Story[];
//   pagination: {
//     total: number;
//     page: number;
//     limit: number;
//     totalPages: number;
//   };
// }

// export const getPopularStories = async (): Promise<Story[]> => {
//   // запит саме на 3 найпопулярніші історії
//   const { data } = await api.get<StoriesResponse>(
//     '/stories?limit=3&sortBy=popular',
//   );

//   // Бекенд вже все відсортував і обрізав до 3-х штук
//   return data.data;
// };

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
  fetchStories({ limit: 3, sortBy: 'popular' });
