import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HIzHgIqYc8j7JHeBT2b4Bj1ppBoSaGxEJefACcdGCNY2GavA0bmmGsmqlfxViAp2AKZEkJEdiFWvmjNhapJNnnp00N6lfucY9'

  const onToken = token => {
    alert("Payment successful")
  }
  return (
    <StripeCheckout 
      label='Pay Now'
      name='E-commerce-app'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton