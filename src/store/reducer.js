import {
  CHANGE_STATE_SEARCH_OPTION, CHANGE_STATE_SORT_OPTION, SET_INPUT_VALUE, GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE, CHANGE_STATE_MODAL_WINDOW, GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_BY_ID_SUCCESS,
} from './actions';

const initialState = {
  inputValue: '',
  searchOption: 'title',
  sortOption: '',
  dataMovies: [],
  totalMovies: 0,
  loading: false,
  error: null,
  visibilityModal: false,
  dataMovieById: {},
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
    case CHANGE_STATE_MODAL_WINDOW:
      return (
        {
          ...state,
          visibilityModal: !state.visibilityModal,
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
    default: return state;
  }
};
