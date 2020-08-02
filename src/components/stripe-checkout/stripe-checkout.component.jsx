import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const publicKey =
    "pk_test_51H8gdlI4k4WLzHFPweooaY5btTUowkgwOOdORznKu3hUSoDrXNiyQ7xxqU8Fo0Cz81fb57saBQdpNkjF8tNPaHt700tyMMBREs";
  const priceForStripe = price * 100; //price in paisa

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      name="Stylish Clothing Inc."
      description={`Your total price is \u20B9${price}`}
      image="https://svgshare.com/i/NDF.svg"
      label="Pay Now"
      stripeKey={publicKey}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      shippingAddress
      billingAddress
    />
  );
};

export default StripeCheckoutButton;
