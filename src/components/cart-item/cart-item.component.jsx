import React from "react";

import "./cart-item.styles.scss";

const CartItem = (props) => {
  const { imageUrl, name, price, quantity } = props.item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <div className="name">{name}</div>
        <div className="price">
          {quantity} X &#x20B9;{price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
