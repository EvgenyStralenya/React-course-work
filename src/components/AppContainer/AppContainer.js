import React from 'react';
import { Route } from 'react-router-dom';
import {
  MoviesContainer, Form, Footer, MovieControl, Modal,
} from '..';
import styles from './styles.module.css';

export const AppContainer = () => {
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
      <Route path="/:id" component={Modal} />
    </div>

  );
};
