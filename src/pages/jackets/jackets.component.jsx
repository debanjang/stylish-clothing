import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectJacketsCollections } from "../../redux/shop/shop.selector";
import CollectionItem from "./../../components/collection-item/collection-item.component";
import "./../common-styles/common.styles.scss";

const Jackets = ({ jacketsData }) => (
  <div className="collection">
    <div className="preview">
      {jacketsData.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  jacketsData: selectJacketsCollections,
});
export default connect(mapStateToProps)(Jackets);
