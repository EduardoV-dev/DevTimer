import { OPEN_MENU, TOGGLE_MODAL, CLOSE_MENU } from '../../types/ui';
import { Action } from '../../../models/interfaces/ui';

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