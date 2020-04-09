import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assests/original.svg";

import "./cart-icon.styles.scss";
import { toggleDropDown } from "../../redux/action/cart.action";

const CartIcon = props => {
  let { toggleDropDown } = props;
  return (
    <div className="cart-icon" onClick={toggleDropDown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

/*
Shorthand return format using parenthesis.
Full format would be akin to: 
const mapDispatchToProps = dispatch => {
  return {
    toggleDropDown: () => dispatch(toggleDropDown())
  }
}
*/
const mapDispatchToProps = dispatch => ({
  toggleDropDown: () => dispatch(toggleDropDown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
