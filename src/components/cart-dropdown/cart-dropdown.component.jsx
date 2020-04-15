import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem item={cartItem} />)
      ) : (
        <span className="empty-message">Your Cart is Empty!</span>
      )}
    </div>
    <CustomButton> GO TO CHECKOUT </CustomButton>
  </div>
);

/* const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
}); */

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
