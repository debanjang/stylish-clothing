import React, { Component } from "react";
import SHOP_DATA from "../shop/shop.data";
import CollectionItem from "./../../components/collection-item/collection-item.component";

import "./../common-styles/common.styles.scss";

class Sneakers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SHOP_DATA
    };
  }

  getSneakersData = data => {
    return data.title === "Sneakers";
  };

  render = () => {
    let sneakersData = this.state.data.find(this.getSneakersData).items;
    console.log("Sneakers", sneakersData);
    return (
      <div className="collection">
        <div className="preview">
          {sneakersData.map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
        </div>
      </div>
    );
  };
}

export default Sneakers;
