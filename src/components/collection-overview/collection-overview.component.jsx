import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./collection-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectPreviewCollections } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectPreviewCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
