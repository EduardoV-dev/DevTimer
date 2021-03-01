import { Action, UiState } from "../../../models/interfaces/general";
import {
  OPEN_MENU,
  TOGGLE_MODAL,
  CLOSE_MENU,
  BUTTON_FACEBOOK_LOADING,
  BUTTON_GITHUB_LOADING,
  BUTTON_ADD_PROJECT_LOADING,
  BUTTON_ADD_TASK_LOADING,
  UI_LOADING,
} from '../../types/ui';

const initialState: UiState = {
  isUiLoading: true,
  isMenuDisplayed: false,
  isModalDisplayed: false,
  isFacebookButtonLoading: false,
  isGithubButtonLoading: false,
  isAddProjectButtonLoading: false,
  isAddTaskButtonLoading: false,
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
    case BUTTON_FACEBOOK_LOADING:
      return {
        ...state,
        isFacebookButtonLoading: action.payload,
      }
    case BUTTON_GITHUB_LOADING:
      return {
        ...state,
        isGithubButtonLoading: action.payload,
      }
    case BUTTON_ADD_PROJECT_LOADING:
      return {
        ...state,
        isAddProjectButtonLoading: action.payload,
      }
    case BUTTON_ADD_TASK_LOADING:
      return {
        ...state,
        isAddTaskButtonLoading: action.payload,
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
    default:
      return { ...state };
  }
}

export default uiReducer;