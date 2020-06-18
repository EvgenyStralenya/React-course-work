import { CHANGE_STATE_SEARCH_OPTION, SET_INPUT_VALUE } from './actions';

const initialState = {
  searchOption: 'title',
  inputValue: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATE_SEARCH_OPTION:
      return (
        {
          ...state,
          searchOption: `${(state.searchOption === 'title') ? 'genres' : 'title'}`,
        }
      );
    case SET_INPUT_VALUE:
      return (
        {
          ...state,
          inputValue: action.payload,
        }
      );
    default: return state;
  }
};
