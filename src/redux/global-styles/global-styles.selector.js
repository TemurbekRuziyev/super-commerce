import { createSelector } from 'reselect';

const selectStyles = state => state.styles;

export const selectColorStyle = createSelector(
  [selectStyles],
  colors => colors.color
);

export const selectStyleColors = createSelector(
    [selectStyles],
    style => style.colors
)