import CartActionTypes from "./cart.action.types";

export const toggleDropDown = () => ({
  type: CartActionTypes.TOGGLE_DROPDOWN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
