import ScheduleTypes from './schedule.types';

const INITIAL_STATE = {
  items: [],
};

const scheduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ScheduleTypes.ADD_SCHEDULE_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
      case ScheduleTypes.REMOVE_SCHEDULE_ITEM:
        return {
          ...state,
          items: [...state.items.filter(item => item.id !== action.payload.id)]
        }
    default:
      return state;
  }
};

export default scheduleReducer;
