import GlobalStyleTypes from './global-styles.types';

export const setGlobalColor = color => ({
  type: GlobalStyleTypes.SET_GLOBAL_COLOR,
  payload: color,
});
