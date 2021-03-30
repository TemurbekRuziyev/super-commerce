import { takeLatest, put, all, call } from 'redux-saga/effects';
import ScheduleTypes from './schedule.types';
import { removeItemFromSchedule } from './schedule.actions';

export function* editSchedule({ payload }) {
  yield put(removeItemFromSchedule(payload));
}

export function* onEditSchedule() {
  yield takeLatest(ScheduleTypes.EDIT_SCHEDULE_ITEM, editSchedule);
}

export function* rootSchedule() {
  yield all([call(onEditSchedule)]);
}
