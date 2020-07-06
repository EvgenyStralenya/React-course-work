import {
  CHANGE_STATE_SEARCH_OPTION, CHANGE_STATE_SORT_OPTION, SET_INPUT_VALUE, RESET_STATE_SORT_OPTION,
  GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE, GET_MOVIE_BY_ID_REQUEST, GET_MOVIE_BY_ID_SUCCESS,
  ADD_MOVIE_TO_STORE_SUCCESS, RESET_DATA_MOVIE_MODAL,
} from './actions';

const initialState = {
  inputValue: '',
  searchOption: 'title',
  sortOption: '',
  dataMovies: [],
  totalMovies: 0,
  loading: false,
  error: null,
  dataMovieById: null,
  offsetMovie: 0,
  limitMovie: 12,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return (
        {
          ...state,
          inputValue: action.payload,
        }
      );
    case CHANGE_STATE_SEARCH_OPTION:
      return (
        {
          ...state,
          searchOption: action.payload,
        }
      );
    case CHANGE_STATE_SORT_OPTION:
      return (
        {
          ...state,
          sortOption: action.payload,
          offsetMovie: 0,
        }
      );
    case RESET_STATE_SORT_OPTION:
      return (
        {
          ...state,
          sortOption: '',
          offsetMovie: 0,
        }
      );
    case GET_MOVIE_SUCCESS:
      return (
        {
          ...state,
          dataMovies: action.payload.dataMovies,
          totalMovies: action.payload.totalMovies,
          loading: false,
        }
      );
    case GET_MOVIE_FAILURE:
      return (
        {
          ...state,
          error: action.payload,
          loading: false,
        }
      );
    case GET_MOVIE_BY_ID_REQUEST:
      return (
        {
          ...state,
          loading: true,
        }
      );
    case GET_MOVIE_BY_ID_SUCCESS:
      return (
        {
          ...state,
          dataMovieById: action.payload,
          loading: false,
        }
      );
    case ADD_MOVIE_TO_STORE_SUCCESS:
      return (
        {
          ...state,
          dataMovies: [...state.dataMovies, ...action.payload.dataMovies],
          loading: false,
          offsetMovie: action.payload.offsetMovie,
        }
      );
    case RESET_DATA_MOVIE_MODAL:
      return (
        {
          ...state,
          dataMovieById: null,
        }
      );
    default: return state;
  }
};
