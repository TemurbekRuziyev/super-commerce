import { addToCartFunctionality, increaseItemCount } from './cart.utils';
import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addToCartFunctionality(action.payload, state.cartItems),
      };
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: increaseItemCount(action.payload, state.cartItems),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [...state.cartItems.filter(el => el.id !== action.payload.id)]
      };
    default:
      return state;
  }
};

export default cartReducer;
