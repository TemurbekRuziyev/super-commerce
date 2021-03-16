import HomePageTypes from "./homepage-collection.types";

export const fetchCategoryStart = () => ({
    type: HomePageTypes.FETCH_CATEGORY_START
});

export const fetchCategorySuccess = (category) => ({
    type: HomePageTypes.FETCH_CATEGORY_SUCCESS,
    payload: category
});

export const fetchCategoryFailure = (error) => ({
    type: HomePageTypes.FETCH_CATEGORY_FAILURE,
    payload: error
});