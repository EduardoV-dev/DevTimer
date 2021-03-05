import { Action, UiState } from "../../../models/interfaces/common";
import { Notification } from '../../../models/interfaces/common';

const TOGGLE_MODAL: string = 'devtimer/ui/TOGGLE_MODAL';
const TOGGLE_MENU: string = 'devtimer/ui/TOGGLE_MENU';
const UI_LOADING: string = 'devtimer/ui/UI_LOADING';
const SHOW_NOTIFICATION: string = 'devtimer/ui/SHOW_NOTIFICATION';
const HIDE_NOTIFICATION: string = 'devtimer/ui/HIDE_NOTIFICATION';

const initialState: UiState = {
  isUiLoading: true,
  isMenuDisplayed: false,
  isModalDisplayed: false,
  isNotificationShown: false,
  notification: {},
}

const uiReducer = (state: UiState = initialState, action: Action): UiState => {
  switch (action.type) {
    case TOGGLE_MENU: 
      return {
        ...state,
        isMenuDisplayed: action.payload,
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

export const toggleModalAction = (modalState: boolean): Action => ({
  type: TOGGLE_MODAL,
  payload: modalState,
});

export const toggleMenuAction = (menuState: boolean): Action => ({
  type: TOGGLE_MENU,
  payload: menuState,
});

export const uiLoadingAction = (loading: boolean): Action => ({
  type: UI_LOADING,
  payload: loading,
});

export const showNotificationAction = (notification: Notification = null): Action => ({
  type: SHOW_NOTIFICATION,
  payload: notification,
});

export const hideNotificationAction = (): Action => ({
  type: HIDE_NOTIFICATION,
});