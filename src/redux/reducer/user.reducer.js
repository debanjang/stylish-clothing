import { ACTION_TYPES } from "../action/action.types";

const INITIAL_STATE = {
  currentUser: null
};

//if no prevState, default to initialState
export const userReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      //state is read only. Always return a new state
      return {
        ...prevState,
        currentUser: action.payload
      };
    default:
      return prevState;
  }
};
