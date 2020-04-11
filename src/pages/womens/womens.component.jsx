import React, { Component } from "react";
import SHOP_DATA from "../shop/shop.data";
import CollectionItem from "./../../components/collection-item/collection-item.component";

import "./../common-styles/common.styles.scss";

class Womens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SHOP_DATA,
    };
  }

  getWomensData = (data) => {
    return data.title === "Womens";
  };

  render = () => {
    let womensData = this.state.data.find(this.getWomensData).items;
    console.log("Womens", womensData);
    return (
      <div className="collection">
        <div className="preview">
          {womensData.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };
}

export default Womens;
