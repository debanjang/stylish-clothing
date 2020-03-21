import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/shopping-logo-svgrepo-com.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ userName }) => {
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
        {userName ? (
          <div className="sign-out-content">
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
            <div className="option"> Welcome {userName}</div>
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
