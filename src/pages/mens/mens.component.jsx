import React, { Component } from "react";
import SHOP_DATA from "../shop/shop.data";
import CollectionItem from "./../../components/collection-item/collection-item.component";

import "./../common-styles/common.styles.scss";

class Mens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SHOP_DATA,
    };
  }

  getMensData = (data) => {
    return data.title === "Mens";
  };

  render = () => {
    let mensData = this.state.data.find(this.getMensData).items;
    console.log("Mens", mensData);
    return (
      <div className="collection">
        <div className="preview">
          {mensData.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };
}

export default Mens;
