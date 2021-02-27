import { Dispatch } from 'redux';
import { openMenuAction, closeMenuAction } from '../../redux/actions/ui';
import { handleBackdrop } from '../components';

export const openMenu = () => (dispatch: Dispatch) => {
  handleBackdrop(true);
  dispatch(openMenuAction());
}

export const closeMenu = () => (dispatch: Dispatch) => {
  handleBackdrop(false)
  dispatch(closeMenuAction());
}