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
const fetchStories = async (params = {}) => {
  const { data } = await api.get('/stories', { params });
  return data.data;
};

// Семантичні іменовані експорти (API functions)
// Саме ці функції будуть викликатися в компонентах
export const getPopularStories = () =>
  fetchStories({ limit: 3, sortBy: 'popular' });
