import { Action, UiState } from "../../../models/interfaces/general";
import {
  OPEN_MENU,
  TOGGLE_MODAL,
  CLOSE_MENU,
  BUTTON_LOADING,
  UI_LOADING,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from '../../types/ui';

const initialState: UiState = {
  isUiLoading: true,
  isMenuDisplayed: false,
  isModalDisplayed: false,
  isButtonLoading: {
    facebook: false,
    github: false,
    addProject: false,
    addTask: false,
  },
  isNotificationShown: false,
  notification: {},
}

const uiReducer = (state: UiState = initialState, action: Action): UiState => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isMenuDisplayed: true,
      }
    case CLOSE_MENU:
      return {
        ...state,
        isMenuDisplayed: false,
      }
    case BUTTON_LOADING:
      return {
        ...state,
        isButtonLoading: {
          ...state.isButtonLoading,
          [action.payload.provider]: action.payload.loadingState,
        },
      }
    case UI_LOADING:
      return {
        ...state,
        isUiLoading: action.payload,
      }
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalDisplayed: action.payload,
      }
    case SHOW_NOTIFICATION:
      return {
        ...state,
        isNotificationShown: true,
        notification: action.payload,
      }
    case HIDE_NOTIFICATION: 
      return {
        ...state,
        isNotificationShown: false,
      }
    default:
      return { ...state };
  }
}

export default uiReducer;