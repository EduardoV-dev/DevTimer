import { Dispatch } from 'redux';
import { RegisterType } from '../../models/types/common';
import {
  toggleMenuAction,
  toggleProjectModalAction,
  toggleTaskModalAction,
} from '../../redux/ducks/ui';
import { handleBackdrop } from '../dashboard/components';

export const handleMenu = (menuState: boolean) => (dispatch: Dispatch<any>): void => {
  handleBackdrop(menuState);
  dispatch(toggleMenuAction(menuState));
}

const handleProjectModal = (state: boolean) => (dispatch: Dispatch<any>): void => {
  handleBackdrop(state);
  if (window.innerWidth < 992 && state) dispatch(toggleMenuAction(false));
  dispatch(toggleProjectModalAction(state));
}

const handleTaskModal = (state: boolean) => (dispatch: Dispatch<any>): void => {
  handleBackdrop(state);
  dispatch(toggleTaskModalAction(state));
}

export const handleModal = (type: RegisterType, state: boolean) => 
  type === 'project' ? handleProjectModal(state) : handleTaskModal(state);