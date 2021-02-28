import { Action } from '../../../models/interfaces/general';
import { SAVE_USER } from '../../types/auth';

export const saveUserAction = (user: any): Action => ({
  type: SAVE_USER,
  payload: user,
});