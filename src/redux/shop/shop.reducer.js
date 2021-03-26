import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  products: [],
  isFetching: true,
  errorMessage: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
      };
    case ShopActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
