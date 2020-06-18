import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { Button } from '../Button';
import { CHANGE_STATE_SEARCH_OPTION, SET_INPUT_VALUE } from '../../store/actions';

export const Form = () => {
  const dispatch = useDispatch();

  const searchOption = useSelector((state) => {
    return state.searchOption;
  });

  const onClick = () => {
    dispatch({ type: CHANGE_STATE_SEARCH_OPTION });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    dispatch({ type: SET_INPUT_VALUE, payload: event.target.value });
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <input onChange={onChange} className={styles.input} />
      <div className={styles.buttonPanel}>
        <div className={styles.searchOptions}>
          <span>Search by</span>
          <Button onClick={onClick} type="searchOptionsButton" isActive={(searchOption === 'title')}>Title</Button>
          <Button onClick={onClick} type="searchOptionsButton" isActive={(searchOption === 'genres')}>Genre</Button>
        </div>
        <Button onClick={onClick} type="searchButton">Search</Button>
      </div>
    </form>
  );
};
