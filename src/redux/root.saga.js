import { all, call } from 'redux-saga/effects';

import { rootCategory } from './homepage-collection/homepage-collection.sagas';

export function* rootSaga() {
  yield all([call(rootCategory)]);
}
