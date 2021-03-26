import CartActionTypes from './cart.types';

export const addToCart = item => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = item => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: item,
});

export const clearCart = item => ({
  type: CartActionTypes.CLEAR_CART,
  payload: item,
});
