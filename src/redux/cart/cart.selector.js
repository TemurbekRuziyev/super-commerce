import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartList = createSelector(
  [selectCart],
  carts => carts.cartItems
);

export const selectCartCount = createSelector([selectCartList], cartList =>
  cartList.reduce((acc, el) => acc + el.quantity, 0)
);

export const selectTotalMoney = createSelector(
  [selectCartList],
  carts => carts.reduce((acc, cart) => acc + cart.price * cart.quantity,0)
)