import { Dispatch } from 'redux';
import { toggleMenuAction, toggleModalAction } from '../../redux/ducks/ui';
import { handleBackdrop } from '../dashboard/components';

export const handleMenu = (menuState: boolean) => (dispatch: Dispatch<any>): void => {
  handleBackdrop(menuState);
  dispatch(toggleMenuAction(menuState));
}

export const handleModal = (state: boolean) => (dispatch: Dispatch<any>): void => {
  handleBackdrop(state);
  if (window.innerWidth < 992 && state) dispatch(toggleMenuAction(false));
  dispatch(toggleModalAction(state));
}