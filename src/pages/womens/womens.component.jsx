import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWomensCollections } from "../../redux/shop/shop.selector";
import CollectionItem from "./../../components/collection-item/collection-item.component";

import "./../common-styles/common.styles.scss";

const Womens = ({ womensData }) => (
  <div className="collection">
    <div className="preview">
      {womensData.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  womensData: selectWomensCollections,
});

export default connect(mapStateToProps)(Womens);
