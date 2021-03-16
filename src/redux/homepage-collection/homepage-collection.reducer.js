import HomePageTypes from './homepage-collection.types';

const INITIAL_STATE = {
  category: [],
  errorMessage: null,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomePageTypes.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
      };
    case HomePageTypes.FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
