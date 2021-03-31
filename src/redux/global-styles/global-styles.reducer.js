import GlobalStyleTypes from './global-styles.types';

const INITIAL_STATE = {
  colors: [
    ['#262626', '#000000', 'rgba(255, 255, 255, .7)', 'rgba(0, 255, 0, .8)'],
    ['#f29d4c', '#d67030', '#242323', 'rgba(0,0,0,1)'],
    ['#8062ff', '#6a32d5', '#242323', '#f29d4c'],
  ],
  color: ['#262626', '#000000', 'rgba(255, 255, 255, .9)', 'rgba(0, 255, 0, .8)'],
};

const styleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GlobalStyleTypes.SET_GLOBAL_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

export default styleReducer;
