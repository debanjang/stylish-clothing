import React from "react";
import { connect } from "react-redux";
import "./checkout.styles.scss";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = ({ checkoutItems, cartTotalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {checkoutItems.map((checkoutItem) => (
      <CheckoutItem key={checkoutItem.id} checkoutItem={checkoutItem} />
    ))}
    <div className="total">
      <div className="total">Total: &#x20B9;{cartTotalPrice}</div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  checkoutItems: selectCartItems,
  cartTotalPrice: selectCartItemsTotalPrice,
});
export default connect(mapStateToProps)(Checkout);
