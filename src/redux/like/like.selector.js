import { createSelector } from 'reselect';

const selectLikes = state => state.like;

export const selectLikeList = createSelector([selectLikes], like => like.likes);
