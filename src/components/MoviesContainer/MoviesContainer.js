import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesItem } from '../MoviesItem';
import { GET_MOVIE_REQUEST } from '../../store/actions';
import styles from './styles.module.css';

export const MoviesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MOVIE_REQUEST });
  }, [dispatch]);

  const dataMovies = useSelector((state) => state.dataMovies);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const renderLoading = () => {
    return (<div className={styles.container}>LOADING...</div>);
  };
  const renderFailure = () => {
    return (<div className={styles.container}>{error}</div>);
  };

  const renderMain = () => {
    return (
      <div className={styles.container}>
        {
      dataMovies.map(({
        id, title, release_date, poster_path, genres,
      }) => {
        return <MoviesItem key={id} title={title} releaseDate={release_date} poster={poster_path} genres={genres} />;
      })
    }

      </div>
    );
  };

  return (
    <div>
      {
        loading ? renderLoading() : error ? renderFailure() : renderMain()
      }

    </div>

  );
};
