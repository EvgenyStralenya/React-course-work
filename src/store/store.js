import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getMoviesMiddleware, addMoviesMiddleware, getMovieByIdMiddleware } from './middleware';
import { reducer } from './reducer';

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(getMoviesMiddleware),
  applyMiddleware(addMoviesMiddleware),
  applyMiddleware(getMovieByIdMiddleware),
));
