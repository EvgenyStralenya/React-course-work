import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { Button } from '../Button';
import { CHANGE_STATE_SEARCH_OPTION, SET_INPUT_VALUE, GET_MOVIE_REQUEST } from '../../store/actions';

export const Form = () => {
  const dispatch = useDispatch();

  const searchOption = useSelector((state) => state.searchOption);
  const inputValue = useSelector((state) => state.inputValue);

  const onClick = (option) => {
    dispatch({ type: CHANGE_STATE_SEARCH_OPTION, payload: option });
  };

  const onClickSearchButton = () => {
    dispatch({ type: GET_MOVIE_REQUEST, payload: { inputValue, searchOption } });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: GET_MOVIE_REQUEST, payload: { inputValue, searchOption } });
  };

  const onChange = (event) => {
    dispatch({ type: SET_INPUT_VALUE, payload: event.target.value });
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <input onChange={onChange} className={styles.input} placeholder="Я ищу..." value={inputValue} />
      <div className={styles.buttonPanel}>
        <div className={styles.searchOptions}>
          <span>Search by</span>
          <Button onClick={() => onClick('title')} type="searchOptionsButton" isActive={(searchOption === 'title')}>Title</Button>
          <Button onClick={() => onClick('genres')} type="searchOptionsButton" isActive={(searchOption === 'genres')}>Genre</Button>
        </div>
        <Button onClick={onClickSearchButton} type="searchButton">Search</Button>
      </div>
    </form>
  );
};
