import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/shopping-logo-svgrepo-com.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = (props) => {
  //read currentUser from redux state set into props through mapStateToProps
  const { currentUser, isCartDropdownHidden } = props;
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACTS
        </Link>
        {currentUser ? (
          <div className="sign-out-content">
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
            <div className="option">Welcome {currentUser.displayName}</div>
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartDropdownHidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isCartDropdownHidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
