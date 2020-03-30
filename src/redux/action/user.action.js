import { ACTION_TYPES } from "./action.types";

export const setCurrentUser = user => ({
  type: ACTION_TYPES.SET_CURRENT_USER,
  payload: user
});
