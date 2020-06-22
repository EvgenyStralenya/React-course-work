import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { moviesMiddleware } from './middleware';
import { reducer } from './reducer';

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(moviesMiddleware),
));
