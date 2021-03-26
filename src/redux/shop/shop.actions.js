import ShopActionTypes from './shop.types';

export const fetchProductsStart = () => ({
  type: ShopActionTypes.FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = products => ({
  type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = error => ({
  type: ShopActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: error,
});
