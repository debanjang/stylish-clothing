import { createSelector } from "reselect";

//input selector, does not accept any other selectors
//and outputs a slice of the state
//Memoized inherently
const selectCart = (state) => state.cart;

//output selector, accepts other selectors and outputs a slice of the state
//memoized inherently
//input param 1: array of selectors,
//imput param 2: the object from the slice of state that the selector returns
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsTotalQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
