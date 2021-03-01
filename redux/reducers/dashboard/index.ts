import { Action, DashboardState } from "../../../models/interfaces/general";
import { SAVE_PROJECT_ERRORS } from "../../types/dashboard";

const initialState = {
  projectErrors: {},
}

const dashboardReducer = (state: DashboardState = initialState, action: Action): DashboardState => {
  switch (action.type) {
    case SAVE_PROJECT_ERRORS: 
      return {
        ...state,
        projectErrors: action.payload,
      }
    default:
      return { ...state };
  }
}

export default dashboardReducer;