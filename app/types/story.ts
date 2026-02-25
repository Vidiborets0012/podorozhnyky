export interface Story {
  _id: string;
  img: string;
  title: string;
  article: string;
  date: string;
  favoriteCount: number;
  category?: { _id: string; name: string };
  ownerId?: { _id: string; name: string; avatarUrl?: string };
  isSaved?: boolean;
}

// Типізуємо саму відповідь сервера
export interface StoriesResponse {
  data: Story[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// інтерфейс для детальної відповіді історії
export interface StoryDetailResponse {
  data: Story;
  isSaved: boolean;
  popularStories: Story[];
}
