import CartActionTypes from "../../action/cart/cart.action.types";
import { addItemsToCart } from "../../utils/cart/cart.utils";

const INTIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
