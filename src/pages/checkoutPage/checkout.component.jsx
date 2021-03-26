import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartList,
  selectTotalMoney,
} from '../../redux/cart/cart.selector';

import {
  CheckoutContainer,
  CheckoutTotalMoney,
  CheckoutDollar,
} from './checkout.styles';

const CheckoutPage = ({ carts, total }) => (
  <CheckoutContainer>
    {carts.map(item => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <CheckoutTotalMoney>
      TOTAL SUM: <CheckoutDollar /> {total.toFixed(3)}
    </CheckoutTotalMoney>
    <StripeCheckoutButton price={total}/>
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  carts: selectCartList,
  total: selectTotalMoney,
});

export default connect(mapStateToProps)(CheckoutPage);
