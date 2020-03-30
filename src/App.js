import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/action/user.action";
import { connect } from "react-redux";

class App extends Component {
  unsubscribeFromAuth = null;

  //get the user id when a user logs in
  componentDidMount() {
    //auth.onAuthStateChanged fires when a user signs in and signs off.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
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
    userRef.onSnapshot(snapshot => {
      this.props.setCurrentUser({
        id: snapshot.id,
        ...snapshot.data()
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
          <Route exact path="/sign-in" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
