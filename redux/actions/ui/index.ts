import {
  OPEN_MENU,
  TOGGLE_MODAL,
  CLOSE_MENU,
  BUTTON_LOADING,
  UI_LOADING,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from '../../types/ui';
import { Notification } from '../../../models/interfaces/general';
import { Action, ButtonLoading } from '../../../models/interfaces/general';

export const toggleModalAction = (modalState: boolean): Action => ({
  type: TOGGLE_MODAL,
  payload: modalState,
});

export const openMenuAction = (): Action => ({
  type: OPEN_MENU,
});

export const closeMenuAction = (): Action => ({
  type: CLOSE_MENU,
});

export const buttonLoadingAction = (loadingArgs: ButtonLoading): Action => ({
  type: BUTTON_LOADING,
  payload: loadingArgs,
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