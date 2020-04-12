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
