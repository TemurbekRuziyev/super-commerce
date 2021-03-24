import LikeActionTypes from './like.type';

export const addAndRemoveFavorite = product => ({
  type: LikeActionTypes.ADD_AND_REMOVE_FAVORITE,
  payload: product,
});
