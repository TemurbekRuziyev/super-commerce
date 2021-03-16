import { createSelector } from 'reselect';

const selectCategory = state => state.category;

export selectCategoryList = createSelector(
    [selectCategory],
    category => category.category
);