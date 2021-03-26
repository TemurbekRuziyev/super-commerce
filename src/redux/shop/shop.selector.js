import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectProductList = createSelector(
  [selectShop],
  products => products.products
);

export const selectProductIs = createSelector(
  [selectShop],
  products => !!!products.products
);

export const selectRecommendedProducts = createSelector(
  [selectProductList],
  list => list.filter((el, index) => index < 4)
);
