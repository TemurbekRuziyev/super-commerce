import ShopActionTypes from './shop.types';
import { productWithLikes } from './shop.utils';

const INITIAL_STATE = {
  products: [],
  isFetching: true,
  errorMessage: null,
  likes: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.GET_LIKE_LIST:
      return {
        ...state,
        likes: action.payload,
      };
    case ShopActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: productWithLikes(action.payload, state.likes),
        // products: action.payload,
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
