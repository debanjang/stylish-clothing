import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./App.css";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Jackets from "./pages/jackets/jackets.component";
import Mens from "./pages/mens/mens.component";
import Sneakers from "./pages/sneakers/sneakers.component";
import Womens from "./pages/womens/womens.component";
import Hats from "./pages/hats/hats.component";
import Checkout from "./pages/checkout/checkout.component";

class App extends Component {
  unsubscribeFromAuth = null;

  //get the user id when a user logs in
  componentDidMount() {
    //auth.onAuthStateChanged fires when a user signs in and signs off.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        //save the user from firebase auth to firestore DB
        //this is how methods such as google sign in,
        //which don't need registration with email and password save data to the DB
        const userRef = await createUserProfileDocument(user);
        //save the user from the firestore snapshot into the state
        this.saveUserToState(userRef);
      } else {
        //dispatch setCurrentUser action by calling setCurrentUserDispatcher
        //set into props through mapDispatchToProps
        this.props.setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  //onSnapshot fires when any data in the firestore documentRef updates
  saveUserToState(userRef) {
    userRef.onSnapshot((snapshot) => {
      this.props.setCurrentUser({
        id: snapshot.id,
        ...snapshot.data(),
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/jackets" component={Jackets} />
          <Route exact path="/shop/mens" component={Mens} />
          <Route exact path="/shop/womens" component={Womens} />
          <Route exact path="/shop/sneakers" component={Sneakers} />
          <Route exact path="/shop/hats" component={Hats} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
  });

/* our mapDispatchToProps function should return a plain object:
Each field in the object will become a separate prop for your own component,
  and the value should normally be a function that dispatches an action when called.
If you use action creators ( as oppose to plain object actions ) inside dispatch, 
  it is a convention to simply name the field key the same name as the action creator 
  
This will bind props to dispatcher every time component re-renders*/
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
