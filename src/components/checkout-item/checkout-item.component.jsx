import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { clearItemFromCart, addItem } from "../../redux/cart/cart.action";
import { removeItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({
  checkoutItem,
  clearItemFromCart,
  addItem,
  removeItem,
}) => {
  const { imageUrl, name, quantity, price } = checkoutItem;
  console.log("Checkout Item", checkoutItem);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={() => removeItem(checkoutItem)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(checkoutItem)}>
          &#10095;
        </span>
      </div>
      <div className="price">{price}</div>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(checkoutItem)}
      >
        &#x2715;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (checkoutItem) =>
    dispatch(clearItemFromCart(checkoutItem)),
  addItem: (checkoutItem) => dispatch(addItem(checkoutItem)),
  removeItem: (checkoutItem) => dispatch(removeItem(checkoutItem)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
