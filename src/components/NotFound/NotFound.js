import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '..';
import { RESET_DATA_MOVIE_MODAL } from '../../store/actions';
import styles from './styles.module.css';

export const NotFound = () => {
  const dispatch = useDispatch();
  dispatch({ type: RESET_DATA_MOVIE_MODAL });

  return (
    <div className={styles.container}>
      <div className={styles.errorWrapper}>
        <span className={styles.codeError}>404</span>
        <span className={styles.textError}>Page not found</span>
        <Link to="/"><Button type="homeButton">Home</Button></Link>
      </div>
    </div>
  );
};
