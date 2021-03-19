import { createSelector } from 'reselect';

const selectCategory = state => state.category;

export const selectCategoryList = createSelector(
    [selectCategory],
    category => category.category
);