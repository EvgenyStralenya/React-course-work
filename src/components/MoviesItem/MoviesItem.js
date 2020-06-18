import React from 'react';
import styles from './styles.module.css';

export const MoviesItem = ({
  title, releaseDate, poster, genres,
}) => {
  return (
    <div className={styles.container}>
      <img src={poster} alt="" className={styles.poster} />
      <div className={styles.description}>
        <div className={styles.title}>
          <h3>{title.toUpperCase()}</h3>
          <span>{releaseDate.split('-')[0]}</span>
        </div>
        <span className={styles.subtitle}>
          {genres.join(' & ')}
        </span>
      </div>
    </div>
  );
};
