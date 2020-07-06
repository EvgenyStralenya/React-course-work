import React from 'react';
import { Route } from 'react-router-dom';
import { MoviesContainer } from '../MoviesContainer';
import { Form } from '../Form';
import { Footer } from '../Footer';
import { MovieControl } from '../MovieControl';
import { Modal } from '../Modal';
import styles from './styles.module.css';

export const AppContainer = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          Netflixroulette
        </div>
        <span>Find your movie</span>
        <Form />
      </header>
      <MovieControl />
      <MoviesContainer />
      <Footer />
      <Route path="/:id" component={Modal} />
    </div>

  );
};
