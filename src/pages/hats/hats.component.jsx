import React, { Component } from "react";
import SHOP_DATA from "../shop/shop.data";
import CollectionItem from "./../../components/collection-item/collection-item.component";

import "./../common-styles/common.styles.scss";

class Hats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SHOP_DATA
    };
  }

  getHatsData = data => {
    return data.title === "Hats";
  };

  render = () => {
    let hatsData = this.state.data.find(this.getHatsData).items;
    console.log("Hats", hatsData);
    return (
      <div className="collection">
        <div className="preview">
          {hatsData.map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
        </div>
      </div>
    );
  };
}

export default Hats;
