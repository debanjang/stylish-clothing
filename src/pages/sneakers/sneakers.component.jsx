import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSneakersCollections } from "../../redux/shop/shop.selector";
import CollectionItem from "./../../components/collection-item/collection-item.component";

import "./../common-styles/common.styles.scss";

const Sneakers = ({ sneakersData }) => (
  <div className="collection">
    <div className="preview">
      {sneakersData.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  sneakersData: selectSneakersCollections,
});
export default connect(mapStateToProps)(Sneakers);
