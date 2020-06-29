import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button';
import { CHANGE_STATE_SORT_OPTION, GET_MOVIE_REQUEST } from '../../store/actions';
import styles from './styles.module.css';

export const MovieControl = () => {
  const dispath = useDispatch();

  const inputValue = useSelector((state) => state.inputValue);
  const searchOption = useSelector((state) => state.searchOption);
  const sortOption = useSelector((state) => state.sortOption);
  const totalMovies = useSelector((state) => state.totalMovies);

  const onClickSortButton = (option) => {
    dispath({ type: CHANGE_STATE_SORT_OPTION, payload: option });
    dispath({
      type: GET_MOVIE_REQUEST,
      payload: {
        inputValue, searchOption, sortOption: option,
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.movieCounter}>{`${totalMovies} movies found`}</div>
      <div className={styles.sortOptions}>
        <span>Sort by:</span>
        <Button onClick={() => onClickSortButton('release_date')} type="sortOptionsButton" isActive={(sortOption === 'release_date')}>Release date</Button>
        <Button onClick={() => onClickSortButton('vote_average')} type="sortOptionsButton" isActive={(sortOption === 'vote_average')}>Rating</Button>
      </div>
    </div>
  );
};
