import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const MoviesItem = ({
  id, title, releaseDate, poster, genres,
}) => {
  return (
    <Link to={`/React-course-work/${id}`}>
      <div className={styles.container}>
        <div className={styles.posterWrapper}>
          <div className={styles.posterContainer} style={{ backgroundImage: `url(${poster})` }} />
        </div>
        <div className={styles.movieDescription}>
          <div className={styles.title}>
            <h3>{title.toUpperCase()}</h3>
            <span>{releaseDate.split('-')[0]}</span>
          </div>
          <div className={styles.subtitle}>
            {genres.join(' & ')}
          </div>
        </div>
      </div>
    </Link>
  );
};
