import { createSelector } from 'reselect';

const selectSchedule = state => state.schedule;

export const selectScheduleList = createSelector(
  [selectSchedule],
  scheduleList => scheduleList.items
);

export const selectScheduleItem = createSelector(
  [selectSchedule],
  schedule => schedule.item
);
