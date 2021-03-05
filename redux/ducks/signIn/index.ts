import { Action, SignInError, SignInState } from "../../../models/interfaces/common";
import { Provider } from "../../../models/types/common";

const SAVE_USER: string = 'devtimer/signIn/SAVE_USER';
const SIGN_IN: string = 'devtimer/signIn/SIGN_IN';
const SIGN_IN_SUCCESS: string = 'devtimer/signIn/SIGN_IN_SUCCESS';
const SIGN_IN_ERROR: string = 'devtimer/signIn/SIGN_IN_ERROR';

const initialState: SignInState = {
  isButtonLoading: {
    facebook: false,
    github: false,
  },
  user: undefined,
  userErrors: {},
}
const signInReducer = (state: SignInState = initialState, action: Action): SignInState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isButtonLoading: {
          ...state.isButtonLoading,
          [action.payload.provider]: true,
        }
      }
    case SIGN_IN_SUCCESS:
    case SIGN_IN_ERROR:
      return {
        ...state,
        isButtonLoading: {
          ...state.isButtonLoading,
          [action.payload.provider]: false,
        },
      }
    case SAVE_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return { ...state };
  }
}

export default signInReducer;

export const saveUserAction = (user: any): Action => ({
  type: SAVE_USER,
  payload: user,
});

export const signInAction = (provider: Provider): Action => ({
  type: SIGN_IN,
  payload: provider,
});

export const signInSuccessAction = (provider: Provider): Action => ({
  type: SIGN_IN_SUCCESS,
  payload: provider,
});

export const signInErrorAction = (provider: Provider): Action => ({
  type: SIGN_IN_ERROR,
  payload: provider,
});