import LikeActionTypes from './like.type';
import likeGenerator from './like.utils';

const INITIAL_STATE = {
  likes: [],
};

const likeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LikeActionTypes.ADD_AND_REMOVE_FAVORITE:
      return {
        ...state,
        likes: likeGenerator(action.payload, state.likes),
      };
    default:
      return state;
  }
};

export default likeReducer;
