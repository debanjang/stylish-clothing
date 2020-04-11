import UserActionTypes from "../../action/user/user.action.types";

const INITIAL_STATE = {
  currentUser: null,
};

//if no prevState, default to initialState
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      //state is read only. Always return a new state
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
