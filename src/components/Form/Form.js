import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { Button } from '../Button';
import {
  CHANGE_STATE_SEARCH_OPTION, SET_INPUT_VALUE, GET_MOVIE_REQUEST, RESET_STATE_SORT_OPTION,
} from '../../store/actions';

export const Form = () => {
  const dispatch = useDispatch();

  const {
    inputValue, searchOption,
  } = useSelector((state) => state);

  const onClickOptionButton = (option) => {
    dispatch({ type: CHANGE_STATE_SEARCH_OPTION, payload: option });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: RESET_STATE_SORT_OPTION });
    dispatch({
      type: GET_MOVIE_REQUEST,
      payload: {
        inputValue, searchOption,
      },
    });
  };

  const onChange = (event) => {
    dispatch({ type: SET_INPUT_VALUE, payload: event.target.value });
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <input onChange={onChange} className={styles.input} placeholder="Find your movie" value={inputValue} />
      <div className={styles.buttonPanel}>
        <div className={styles.searchOptions}>
          <span>Search by</span>
          <div className={styles.buttonWrapper}>
            <Button onClick={() => onClickOptionButton('title')} typeButton="searchOptionsButton" isActive={(searchOption === 'title')}>Title</Button>
            <Button onClick={() => onClickOptionButton('genres')} typeButton="searchOptionsButton" isActive={(searchOption === 'genres')}>Genre</Button>
          </div>
        </div>
        <Button typeButton="searchButton">Search</Button>
      </div>
    </form>
  );
};
