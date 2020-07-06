import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesItem } from '../MoviesItem';
import { GET_MOVIE_REQUEST, ADD_MOVIE_TO_STORE_REQUEST } from '../../store/actions';
import styles from './styles.module.css';

export const MoviesContainer = () => {
  const {
    dataMovies, inputValue, searchOption, sortOption, error,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const isScroll = useRef(false);

  useEffect(() => {
    dispatch({ type: GET_MOVIE_REQUEST });
  }, [dispatch]);

  const renderFailure = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.errorMessage}>{error}</div>
      </div>
    );
  };
  const renderMain = () => {
    return (
      <div className={styles.wrapper}>
        {
          (dataMovies.length === 0) ? 'Movies not found' : dataMovies.map(({
            id, title, release_date: releaseDate, poster_path: poster, genres,
          }) => {
            return (
              <MoviesItem
                key={id}
                id={id}
                title={title}
                releaseDate={releaseDate}
                poster={poster}
                genres={genres}
              />
            );
          })
        }
      </div>
    );
  };

  if (isScroll.current) {
    isScroll.current = !isScroll.current;
  }

  const onScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (isScroll.current) return;

    if (windowHeight + scrollTop >= documentHeight - 200) {
      dispatch({
        type: ADD_MOVIE_TO_STORE_REQUEST,
        payload: {
          inputValue, searchOption, sortOption,
        },
      });
      isScroll.current = !isScroll.current;
      window.removeEventListener('scroll', onScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return (
    <main className={styles.container}>
      {
        error ? renderFailure() : renderMain()
      }
    </main>
  );
};
