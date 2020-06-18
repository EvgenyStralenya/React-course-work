import React from 'react';
import { MoviesItem } from '../MoviesItem';
import styles from './styles.module.css';

export const MoviesContainer = () => {
  const title = 'The Adventures of Ichabod and Mr. Toad';
  const releaseDate = '1949-10-05';
  const poster = 'https://image.tmdb.org/t/p/w500/o6GfVkgPaaHJnXNywDLpHJII2tW.jpg';
  const genres = ['Horror', 'Fantasy', 'Animation', 'Family'];
  return (
    <div className={styles.container}>
      <MoviesItem title={title} releaseDate={releaseDate} poster={poster} genres={genres} />
      <MoviesItem title={title} releaseDate={releaseDate} poster={poster} genres={genres} />
    </div>
  );
};
