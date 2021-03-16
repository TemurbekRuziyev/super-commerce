import { takeLatest, all, put, call } from 'redux-saga/effects';

import {
  fetchCategoryFailure,
  fetchCategorySuccess,
} from './homepage-collection.actions';
import HomePageTypes from './homepage-collection.types';

export function* fetchCategory() {
  try {
    const category = yield fetch(
      'https://fakestoreapi.com/products/categories'
    );
    const data = yield category.json();

    yield put(fetchCategorySuccess(data));
  } catch (error) {
    yield put(fetchCategoryFailure(error));
  }
}

export function* onFetchCategoryStart() {
  yield takeLatest(HomePageTypes.FETCH_CATEGORY_START, fetchCategory);
}

export function* rootCategory() {
  yield all([call(onFetchCategoryStart)]);
}
