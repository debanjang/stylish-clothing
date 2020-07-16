import React from "react";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    {match.params.collectionId ? (
      <Collection match={match} />
    ) : (
      <CollectionOverview />
    )}
  </div>
);

export default ShopPage;
