import ScheduleTypes from './schedule.types';

const INITIAL_STATE = {
  items: [],
  item: null,
};

const scheduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ScheduleTypes.ADD_SCHEDULE_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        item: null
      };
    case ScheduleTypes.REMOVE_SCHEDULE_ITEM:
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== action.payload.id)],
      };
    case ScheduleTypes.EDIT_SCHEDULE_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default scheduleReducer;
