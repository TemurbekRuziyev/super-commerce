import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const stripeKey =
    'pk_test_51IO5OBAkiXt2qprphnG1MRBUbA7lO40TurxA0bgDHN8ep8t8dZnoxYaxpeSsenAIrEYlWMc5UFbD6j737BPlbTnG00jKICvOXe';
  const priceForStripe = 100 * price;


  return (
  <StripeCheckout 
    stripeKey={stripeKey}  
    name='Super-commerce payment'
      
  />
  );
};
