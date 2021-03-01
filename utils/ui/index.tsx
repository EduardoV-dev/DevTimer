import { Dispatch } from 'redux';
import { openMenuAction, closeMenuAction, toggleModalAction } from '../../redux/actions/ui';
import { handleBackdrop } from '../components';

export const openMenu = () => (dispatch: Dispatch): void => {
  handleBackdrop(true);
  dispatch(openMenuAction());
}

export const closeMenu = () => (dispatch: Dispatch): void => {
  handleBackdrop(false)
  dispatch(closeMenuAction());
}

export const handleModal = (state: boolean, dispatch: Dispatch<any>): void => {
  handleBackdrop(state);
  if (window.innerWidth < 992 && state) dispatch(closeMenuAction());
  dispatch(toggleModalAction(state));
}