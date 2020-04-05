import USER_ACTION_TYPES from "../action/user.action.types";

const INITIAL_STATE = {
  currentUser: null
};

//if no prevState, default to initialState
export const userReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      //state is read only. Always return a new state
      return {
        ...prevState,
        currentUser: action.payload
      };
    default:
      return prevState;
  }
};
