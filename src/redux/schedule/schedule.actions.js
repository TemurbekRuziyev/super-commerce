import ScheduleTypes from './schedule.types';

export const addItemToSchedule = item => ({
  type: ScheduleTypes.ADD_SCHEDULE_ITEM,
  payload: item,
});

export const editScheduleItem = item => ({
  type: ScheduleTypes.EDIT_SCHEDULE_ITEM,
  payload: item,
});

export const removeItemFromSchedule = item => ({
  type: ScheduleTypes.REMOVE_SCHEDULE_ITEM,
  payload: item,
});
