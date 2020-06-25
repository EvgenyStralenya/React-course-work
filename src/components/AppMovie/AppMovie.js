import React from 'react';
import {
  MoviesContainer, Form, Footer, MovieControl,
} from '..';
import styles from './styles.module.css';

export const AppMovie = ({ children }) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          Netflixroulette
        </div>
        <span>Find your movie</span>
        <Form />
      </div>
      <MovieControl />
      <MoviesContainer />
      <Footer />
      {children}
    </div>

  );
};
