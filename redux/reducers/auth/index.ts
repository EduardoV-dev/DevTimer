import { Action, AuthState } from "../../../models/interfaces/general";
import { SAVE_USER } from "../../types/auth";

const initialState: AuthState = {
  user: undefined,
}

const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
  switch(action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return { ...state };
  }
}

export default authReducer;