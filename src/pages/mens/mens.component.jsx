import React from "react";
import { connect } from "react-redux";
import { selectMensCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionItem from "./../../components/collection-item/collection-item.component";

import "./../common-styles/common.styles.scss";

const Mens = ({ mensData }) => (
  <div className="collection">
    <div className="preview">
      {mensData.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  mensData: selectMensCollections,
});

export default connect(mapStateToProps)(Mens);
