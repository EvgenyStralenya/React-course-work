import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesItem } from '../MoviesItem';
import { GET_MOVIE_REQUEST, ADD_MOVIE_TO_STORE_REQUEST } from '../../store/actions';
import styles from './styles.module.css';

export const MoviesContainer = () => {
  const dataMovies = useSelector((state) => state.dataMovies);
  const inputValue = useSelector((state) => state.inputValue);
  const searchOption = useSelector((state) => state.searchOption);
  const sortOption = useSelector((state) => state.sortOption);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  let isScroll = false;

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
          dataMovies.map(({
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

  const onScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (isScroll) return;

    if (windowHeight + scrollTop >= documentHeight - 200) {
      dispatch({
        type: ADD_MOVIE_TO_STORE_REQUEST,
        payload: {
          inputValue, searchOption, sortOption,
        },
      });
      isScroll = !isScroll;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <div className={styles.container}>
      {
        error ? renderFailure() : renderMain()
      }
    </div>
  );
};
