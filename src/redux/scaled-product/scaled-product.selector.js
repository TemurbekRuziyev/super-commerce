import { createSelector } from 'reselect';

const selectScaled = state => state.scaled;

export const scaledProduct = createSelector(
  [selectScaled],
  scaled => scaled.scaledProduct
);
