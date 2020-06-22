import { getMovies } from '../api';
import { GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE } from './actions';

export const moviesMiddleware = (store) => (next) => (action) => {
  const inputValue = action.payload && action.payload.inputValue;
  const searchOption = action.payload && action.payload.searchOption;

  if (action.type === GET_MOVIE_REQUEST) {
    getMovies(inputValue, searchOption).then((responseMovies) => {
      const { data: dataMovies, total: totalMovies } = responseMovies;
      store.dispatch({ type: GET_MOVIE_SUCCESS, payload: { dataMovies, totalMovies } });
    })
      .catch((error) => {
        store.dispatch({ type: GET_MOVIE_FAILURE, payload: error.message });
      });
  }
  return next(action);
};
