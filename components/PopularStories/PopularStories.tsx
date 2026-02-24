// import { Story } from '@/services/stories-api';
import { Story } from '@/app/types/story';
import TravellersStoriesItem from '../TravellersStoriesItem/TravellersStoriesItem';
import styles from './PopularStories.module.css';

interface PopularStoriesProps {
  stories: Story[];
  title: string;
}

export default function PopularStories({
  stories,
  title,
}: PopularStoriesProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.storiesList}>
        {stories.map((story) => (
          <li key={story._id}>
            <TravellersStoriesItem story={story} />
          </li>
        ))}
      </ul>
    </div>
  );
}
