import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  HeaderContainer,
  LogoContainer,
  LogoElement,
  OptionsContainer,
  OptionLink,
  SignOutContainer,
  OptionDiv,
} from "./header.styles";

const Header = (props) => {
  //read currentUser from redux state set into props through mapStateToProps
  const { currentUser, isCartDropdownHidden } = props;
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoElement className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACTS</OptionLink>
        {currentUser ? (
          <SignOutContainer>
            <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
            {/*<OptionDiv>Welcome {currentUser.displayName}</OptionDiv>*/}
            {/* If only the base component returned is different,
              as is the case between OptionLink and OptionDiv, we can use the as attribute
              to convert one to the other */}
            <OptionLink as="div">Welcome {currentUser.displayName}</OptionLink>
          </SignOutContainer>
        ) : (
          <OptionLink to="/sign-in">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {isCartDropdownHidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartDropdownHidden: selectCartHidden,
  });

export default connect(mapStateToProps)(Header);
