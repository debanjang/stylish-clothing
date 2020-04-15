export const addItemsToCart = (cartItems, itemToAdd) => {
  let result = [];
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  if (existingItem) {
    result = cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    result = [...cartItems, { ...itemToAdd, quantity: 1 }];
  }

  return result;
};

export const removeItemsFromCart = (cartItems, itemToRemove) => {
  let result = [];
  console.log("Cart Items", cartItems);
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (existingItem.quantity === 1) {
    result = cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  } else {
    result = cartItems.map((cartItem) =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return result;
};
