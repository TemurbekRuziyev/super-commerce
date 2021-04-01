import { takeLatest, put, all, call } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { fetchProductsSuccess, fetchProductsFailure } from './shop.actions';

export function* fetchProducts() {
  try {
    // const data = yield fetch('https://fakestoreapi.herokuapp.com/products'); Sometimes this will work because of fikestoreapi mistakes
    const data = yield fetch('https://fakestoreapi.com/products'); //Sometimes this will work because of fikestoreapi mistakes
    const json = yield data.json();

    yield put(fetchProductsSuccess(json));
  } catch (error) {
    yield put(fetchProductsFailure(error));
    console.log(error);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(ShopActionTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* rootShop() {
  yield all([call(onFetchProductsStart)]);
}
