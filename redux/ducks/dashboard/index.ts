import { Action, DashboardState } from "../../../models/interfaces/common";
import { Project, ProjectFormErrors } from "../../../models/interfaces/dashboard";

const CREATE_PROJECT: string = 'devtimer/dashboard/CREATE_PROJECT';
const CREATE_PROJECT_SUCCESS: string = 'devtimer/dashboard/CREATE_PROJECT_SUCCESS';
const CREATE_PROJECT_ERROR: string = 'devtimer/dashboard/CREATE_PROJECT_ERROR';
const SAVE_PROJECT_FORM_ERRORS: string = 'devtimer/dashboard/SAVE_PROJECT_FORM_ERRORS';
const SELECT_PROJECT: string = 'devtimer/dashboard/SELECT_PROJECT';
const CLEAN_SESSION: string = 'devtimer/dashboard/CLEAN_SESSION';
const LOAD_PROJECTS: string = 'devtimer/dashboard/LOAD_PROJECTS';

const initialState: DashboardState = {
  isButtonLoading: {
    addProject: false,
    addTask: false,
  },
  projects: null,
  projectFormErrors: {},
  selectedProject: null,
}

const dashboardReducer = (state: DashboardState = initialState, action: Action): DashboardState => {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        isButtonLoading: {
          ...state.isButtonLoading,
          addProject: true,
        }
      }
    case CREATE_PROJECT_SUCCESS:
    case CREATE_PROJECT_ERROR:
      return {
        ...state,
        isButtonLoading: {
          ...state.isButtonLoading,
          addProject: false,
        },
      }
    case SAVE_PROJECT_FORM_ERRORS:
      return {
        ...state,
        projectFormErrors: action.payload,
        isButtonLoading: {
          ...state.isButtonLoading,
          addProject: JSON.stringify(action.payload) === '{}' ? true : false,
        }
      }
    case SELECT_PROJECT:
      return {
        ...state,
        selectedProject: action.payload,
      }
    case CLEAN_SESSION:
      return {
        ...state,
        projects: null,
        projectFormErrors: {},
      }
    case LOAD_PROJECTS: 
      return {
        ...state,
        projects: action.payload,
      }
    default:
      return { ...state };
  }
}

export default dashboardReducer;

export const createProjectAction = (): Action => ({
  type: CREATE_PROJECT,
});

export const createProjectSuccessAction = (): Action => ({
  type: CREATE_PROJECT_SUCCESS,
});

export const createProjectErrorsAction = (): Action => ({
  type: CREATE_PROJECT_ERROR,
});

export const saveProjectFormErrorsAction = (errors: ProjectFormErrors): Action => ({
  type: SAVE_PROJECT_FORM_ERRORS,
  payload: errors,
});

export const selectProjectAction = (project: Project): Action => ({
  type: SELECT_PROJECT,
  payload: project,
});

export const cleanProjectsListAction = (): Action => ({
  type: CLEAN_SESSION,
});

export const loadProjectsAction = (projects: any): Action => ({
  type: LOAD_PROJECTS,
  payload: projects,
});