import React from 'react';
import { connect } from 'react-redux';

import {
  addToCart,
  clearCart,
  removeFromCart,
} from '../../redux/cart/cart.actions';
import { ReactComponent as IncLogo } from '../../assets/cheveron-right.svg';

import {
  CheckoutItemContainer,
  CheckoutItemImage,
  CheckoutItemImageContainer,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  CheckoutItemTitle,
  CheckoutItemTotalPrice,
  CheckoutItemClear,
  CancelBtn,
  CheckoutItemBtn,
} from './checkout-item.styles';

const CheckoutItem = ({ item, incCount, decCount, deleteItem }) => {
  const { image, price, title, quantity, description } = item;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage src={image} alt={description.substring(0, 100)} />
      </CheckoutItemImageContainer>
      <CheckoutItemTitle>{title}</CheckoutItemTitle>
      <CheckoutItemPrice>$ {price}</CheckoutItemPrice>
      <CheckoutItemQuantity>
        <CheckoutItemBtn onClick={() => incCount(item)}>
          {' '}
          <IncLogo />{' '}
        </CheckoutItemBtn>
        {quantity}
        <CheckoutItemBtn
          onClick={() => decCount(item)}
          disabled={item.quantity <= 1 ? 'disabled' : ''}
        >
          {' '}
          <IncLogo />{' '}
        </CheckoutItemBtn>
      </CheckoutItemQuantity>
      <CheckoutItemTotalPrice>$ {(quantity * price).toFixed(3)}</CheckoutItemTotalPrice>
      <CheckoutItemClear>
        <CancelBtn onClick={() => deleteItem(item)} />
      </CheckoutItemClear>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  incCount: item => dispatch(addToCart(item)),
  decCount: item => dispatch(removeFromCart(item)),
  deleteItem: item => dispatch(clearCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
