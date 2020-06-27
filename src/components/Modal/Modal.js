import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_MOVIE_BY_ID_REQUEST } from '../../store/actions';
import { Button } from '../Button';
import styles from './styles.module.css';

export const Modal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MOVIE_BY_ID_REQUEST, payload: id });
  }, [dispatch]);

  const dataMovieById = useSelector((state) => state.dataMovieById);
  const {
    title, genres = [], overview, poster_path: poster, vote_average: rating, budget,
  } = dataMovieById;
  const onClick = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.modalWindow} style={{ backgroundImage: `url(${poster})` }}>
        <div className={styles.modalWindowContainer}>
          <span className={styles.movieTitle}>{title}</span>
          <span className={styles.movieGenres}>
            {genres.join(' & ')}
          </span>
          <span className={styles.movieOverview}>{overview}</span>
          <span className={styles.movieBudget}>{`Budget: ${budget}$`}</span>
          <span className={styles.movieRating}>{`Rating: ${rating}`}</span>
        </div>
        <Button onClick={onClick}>Close</Button>
      </div>
    </div>
  );
};
