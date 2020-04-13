import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assests/original.svg";

import { toggleDropDown } from "../../redux/cart/cart.action";

import { selectCartItemsTotalQuantity } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = (props) => {
  let { toggleDropDown, totalCount } = props;
  return (
    <div className="cart-icon" onClick={toggleDropDown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalCount}</span>
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
const mapDispatchToProps = (dispatch) => ({
  toggleDropDown: () => dispatch(toggleDropDown()),
});

/* const mapStateToProps = (state) => ({
  totalCount: selectCartItemsTotalQuantity(state),
}); */

const mapStateToProps = createStructuredSelector({
  totalCount: selectCartItemsTotalQuantity,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
