import ScaledProductTypes from './scaled-product.types';

const INITIAL_STATE = {
  scaledProduct: null,
};

const scaledReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ScaledProductTypes.SCALED_PRODUCT:
      return {
        ...state,
        scaledProduct: action.payload,
      };
    case ScaledProductTypes.REMOVE_SCALED_PRODUCT:
      return {
        ...state,
        scaledProduct: null,
      };
    default:
      return state;
  }
};

export default scaledReducer;
