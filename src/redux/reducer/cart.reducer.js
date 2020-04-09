import CartActionTypes from "../action/cart.action.types";

const INTIAL_STATE = {
  hidden: true
};

export const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};
