import React from "react";
import { connect } from "react-redux";

import "./collection.styles.scss";
import { selectIndividualCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../collection-item/collection-item.component";

const Collection = ({ collection }) => {
  return (
    <div className="collection">
      <div className="preview">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectIndividualCollection(ownProps.match.params.collectionId)(
    state
  ),
});

export default connect(mapStateToProps)(Collection);
