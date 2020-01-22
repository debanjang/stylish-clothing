import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Hats from "./pages/hats/hats.component";
import "./App.css";
import Jackets from "./pages/jackets/jackets.component";
import Sneakers from "./pages/sneakers/sneakers.component";
import Womens from "./pages/womens/womens.component";
import Mens from "./pages/mens/mens.component";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={Hats} />
      <Route exact path="/shop/jackets" component={Jackets} />
      <Route exact path="/shop/sneakers" component={Sneakers} />
      <Route exact path="/shop/womens" component={Womens} />
      <Route exact path="/shop/mens" component={Mens} />
    </div>
  );
}

export default App;
