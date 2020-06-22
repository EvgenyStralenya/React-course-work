import {
  CHANGE_STATE_SEARCH_OPTION, CHANGE_STATE_SORT_OPTION, SET_INPUT_VALUE, GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE,
} from './actions';

const initialState = {
  inputValue: '',
  searchOption: 'title',
  sortOption: 'release_date',
  dataMovies: [],
  totalMovies: 0,
  loading: false,
  error: null,
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
        }
      );
    case GET_MOVIE_REQUEST:
      return (
        {
          ...state,
          loading: true,
        }
      );
    case GET_MOVIE_SUCCESS:
      return (
        {
          ...state,
          dataMovies: action.payload.dataMovies,
          loading: false,
          totalMovies: action.payload.totalMovies,

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
    default: return state;
  }
};
