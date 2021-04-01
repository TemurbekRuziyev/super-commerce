import { all, call } from 'redux-saga/effects';

import { rootShop } from './shop/shop.saga';
import { rootSchedule } from './schedule/schedule.saga';

export function* rootSaga() {
  yield all([call(rootShop), call(rootSchedule)]);
}
