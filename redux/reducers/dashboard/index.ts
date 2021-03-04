import { Action, DashboardState } from "../../../models/interfaces/general";
import { 
  SAVE_PROJECTS,
  SAVE_PROJECT_ERRORS,
  SELECT_PROJECT,
} from "../../types/dashboard";

const initialState: DashboardState = {
  projects: null,
  projectErrors: {},
  selectedProject: null,
}

const dashboardReducer = (state: DashboardState = initialState, action: Action): DashboardState => {
  switch (action.type) {
    case SAVE_PROJECT_ERRORS: 
      return {
        ...state,
        projectErrors: action.payload,
      }
    case SAVE_PROJECTS:
        return {
          ...state,
          projects: action.payload,
        }
      case SELECT_PROJECT:
        return {
          ...state,
          selectedProject: action.payload,
        }
    default:
      return { ...state };
  }
}

export default dashboardReducer;