import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button';
import { CHANGE_STATE_SORT_OPTION } from '../../store/actions';
import styles from './styles.module.css';

export const MovieControl = () => {
  const dispath = useDispatch();

  const sortOption = useSelector((state) => state.sortOption);
  const totalMovies = useSelector((state) => state.totalMovies);

  const onClick = (option) => {
    dispath({ type: CHANGE_STATE_SORT_OPTION, payload: option });
  };

  return (
    <div className={styles.container}>
      <div className={styles.movieCounter}>{`${totalMovies} movies found`}</div>
      <div className={styles.sortOptions}>
        <span>Sort by:</span>
        <Button onClick={() => onClick('release_date')} type="sortOptionsButton" isActive={(sortOption === 'release_date')}>Release date</Button>
        <Button onClick={() => onClick('vote_average')} type="sortOptionsButton" isActive={(sortOption === 'vote_average')}>Rating</Button>
      </div>
    </div>
  );
};
