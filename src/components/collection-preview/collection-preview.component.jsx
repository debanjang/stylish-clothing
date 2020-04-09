import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";

import "./collection-preview.styles.scss";

//history and match is precieved through higher order component withRouter
const CollectionPreview = ({ title, routeName, items, history, match }) => {
  return (
    <div className="collection-preview">
      <div
        className="title"
        onClick={() => history.push(`${match.url}/${routeName}`)}
      >
        {title.toUpperCase()}
      </div>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
