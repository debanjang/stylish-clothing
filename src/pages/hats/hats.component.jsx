import React from "react";
import { connect } from "react-redux";
import { selectHatCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionItem from "./../../components/collection-item/collection-item.component";

import "./../common-styles/common.styles.scss";

const Hats = ({ hatsData }) => (
  <div className="collection">
    <div className="preview">
      {hatsData.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  hatsData: selectHatCollections,
});

export default connect(mapStateToProps)(Hats);
