export interface Story {
  _id: string;
  img: string;
  title: string;
  article: string;
  date: string;
  favoriteCount: number;
  category?: { _id: string; name: string } | string;
  ownerId?: { _id: string; name: string; avatarUrl?: string } | string;
  isSaved?: boolean;
}
