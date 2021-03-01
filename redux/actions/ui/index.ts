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
import { Action } from '../../../models/interfaces/general';

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

export const buttonFacebookLoadingAction = (loading: boolean): Action => ({
  type: BUTTON_FACEBOOK_LOADING,
  payload: loading,
});

export const buttonGithubLoadingAction = (loading: boolean): Action => ({
  type: BUTTON_GITHUB_LOADING,
  payload: loading,
});

export const buttonAddProjectLoadingAction = (loading: boolean): Action => ({
  type: BUTTON_ADD_PROJECT_LOADING,
  payload: loading,
});

export const buttonAddTaskLoadingAction = (loading: boolean): Action => ({
  type: BUTTON_ADD_TASK_LOADING,
  payload: loading,
});

export const uiLoadingAction = (loading: boolean): Action => ({
  type: UI_LOADING,
  payload: loading,
});