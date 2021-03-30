import { all, call } from 'redux-saga/effects';

import { rootCategory } from './homepage-collection/homepage-collection.sagas';
import { rootShop } from './shop/shop.saga';
import { rootSchedule } from './schedule/schedule.saga';

export function* rootSaga() {
  yield all([call(rootCategory), call(rootShop), call(rootSchedule)]);
}
