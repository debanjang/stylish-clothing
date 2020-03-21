import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  //get the user id when a user logs in
  componentDidMount() {
    //auth.onAuthStateChanged fires when a user signs in and signs off.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        //save the user from firebase auth to firestore db
        const userRef = await createUserProfileDocument(user);
        //save the user from the firestore snapshot into the state
        this.saveUserToState(userRef);
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  //onSnapshot fires when any data in the firestore documentRef updates and saves to the state
  saveUserToState(userRef) {
    userRef.onSnapshot(snapshot => {
      this.setState(
        {
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
        },
        () => {
          console.log("User: ", this.state.currentUser);
        }
      );
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          userName={
            this.state.currentUser ? this.state.currentUser.displayName : null
          }
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
