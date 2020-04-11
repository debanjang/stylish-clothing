import React, { Component } from "react";
import SHOP_DATA from "./../shop/shop.data";
import CollectionItem from "./../../components/collection-item/collection-item.component";
import "./../common-styles/common.styles.scss";

class Jackets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SHOP_DATA,
    };
  }

  getJacketsData = (data) => {
    return data.title === "Jackets";
  };

  render = () => {
    let jacketsData = this.state.data.find(this.getJacketsData).items;
    console.log("Jackets", jacketsData);
    return (
      <div className="collection">
        <div className="preview">
          {jacketsData.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };
}

export default Jackets;
