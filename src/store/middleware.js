import { getMovies, getMovieById } from '../api';
import {
  GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE, GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_BY_ID_SUCCESS, ADD_MOVIE_TO_STORE_REQUEST, ADD_MOVIE_TO_STORE_SUCCESS,
} from './actions';

export const moviesMiddleware = (store) => (next) => (action) => {
  const inputValue = action.payload && action.payload.inputValue;
  const searchOption = action.payload && action.payload.searchOption;
  const sortOption = action.payload && action.payload.sortOption;
  const movieId = action.payload;

  const state = store.getState();
  let { offsetMovie } = state;

  if (action.type === GET_MOVIE_REQUEST) {
    getMovies(inputValue, searchOption, sortOption, offsetMovie)
      .then((responseMovies) => {
        const { data: dataMovies, total: totalMovies } = responseMovies;
        store.dispatch({ type: GET_MOVIE_SUCCESS, payload: { dataMovies, totalMovies } });
      })
      .catch((error) => {
        store.dispatch({ type: GET_MOVIE_FAILURE, payload: error.message });
      });
  }

  if (action.type === ADD_MOVIE_TO_STORE_REQUEST) {
    offsetMovie += 12;
    getMovies(inputValue, searchOption, sortOption, offsetMovie)
      .then((responseMovies) => {
        const { data: dataMovies } = responseMovies;
        store.dispatch({ type: ADD_MOVIE_TO_STORE_SUCCESS, payload: { dataMovies, offsetMovie } });
      })
      .catch((error) => {
        store.dispatch({ type: GET_MOVIE_FAILURE, payload: error.message });
      });
  }

  if (action.type === GET_MOVIE_BY_ID_REQUEST) {
    getMovieById(movieId).then((responseMovie) => {
      store.dispatch({ type: GET_MOVIE_BY_ID_SUCCESS, payload: responseMovie });
    })
      .catch((error) => {
        store.dispatch({ type: GET_MOVIE_FAILURE, payload: error.message });
      });
  }
  return next(action);
};
