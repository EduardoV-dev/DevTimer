import { Action, State } from "../../../models/interfaces/ui";
import { CLOSE_MENU, OPEN_MENU } from '../../types/ui';

const initialState = {
  isMenuDisplayed: false,
}

const uiReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isMenuDisplayed: true,
      }
    case CLOSE_MENU:
      return {
        ...state,
        isMenuDisplayed: false,
      }
    default:
      return { ...state };
  }
}

export default uiReducer;