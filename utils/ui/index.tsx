import { Dispatch } from 'redux';
import { Modal } from '../../models/interfaces/dashboard';
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

const handleProjectModal = ({ name, value }: Modal) => (dispatch: Dispatch<any>): void => {
  handleBackdrop(value);
  if (window.innerWidth < 992 && value) dispatch(toggleMenuAction(false));
  dispatch(toggleProjectModalAction({ name, value }));
}

const handleTaskModal = ({ name, value }: Modal) => (dispatch: Dispatch<any>): void => {
  handleBackdrop(value);
  dispatch(toggleTaskModalAction({ name, value }));
}

export const handleModal = (type: RegisterType, modalState: Modal) =>
  type === 'project' ? handleProjectModal(modalState) : handleTaskModal(modalState);