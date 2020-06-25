import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export const MoviesItem = ({
  id, title, releaseDate, poster, genres,
}) => {
  return (
    <NavLink to={`/${id}`}>
      <div className={styles.container}>
        <img src={poster} alt={`${title} movie poster`} className={styles.poster} />
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
    </NavLink>
  );
};
