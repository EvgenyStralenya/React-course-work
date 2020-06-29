import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { GET_MOVIE_BY_ID_REQUEST, RESET_DATA_MOVIE_MODAL } from '../../store/actions';
import { Button } from '../Button';
import styles from './styles.module.css';

export const Modal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MOVIE_BY_ID_REQUEST, payload: id });
  }, [dispatch, id]);

  const dataMovieById = useSelector((state) => state.dataMovieById);
  const history = useHistory();
  const onClick = () => {
    dispatch({ type: RESET_DATA_MOVIE_MODAL });
    history.goBack();
  };
  if (dataMovieById !== null && Object.keys(dataMovieById).length === 0) {
    return <Redirect to={{ pathname: '/not-found' }} />;
  }

  const {
    title, genres = [], overview, poster_path: poster, vote_average: rating, budget,
  } = dataMovieById || {};

  return (
    <div className={styles.container}>
      <div className={styles.modalWindow} style={{ backgroundImage: `url(${poster})` }}>
        <div className={styles.modalWindowContainer}>
          <div className={styles.movieTitle}>
            {title}
            <Button onClick={onClick} type="closeModalButton">&times;</Button>
          </div>
          <span className={styles.movieGenres}>
            {genres.join(' & ')}
          </span>
          <span className={styles.movieOverview}>{overview}</span>
          <span className={styles.movieBudget}>{`Budget: ${budget}$`}</span>
          <span className={styles.movieRating}>{`Rating: ${rating}`}</span>
        </div>
      </div>
    </div>
  );
};
