import { Action, DashboardState } from "../../../models/interfaces/common";
import { Project, ProjectFormErrors, Task, TaskFormErrors } from "../../../models/interfaces/dashboard";

const CREATE_PROJECT: string = 'devtimer/dashboard/CREATE_PROJECT';
const CREATE_PROJECT_SUCCESS: string = 'devtimer/dashboard/CREATE_PROJECT_SUCCESS';
const CREATE_PROJECT_ERROR: string = 'devtimer/dashboard/CREATE_PROJECT_ERROR';
const EDIT_PROJECT: string = 'devtimer/dashboard/EDIT_PROJECT';
const EDIT_PROJECT_SUCCESS: string = 'devtimer/dashboard/EDIT_PROJECT_SUCCESS';
const EDIT_PROJECT_ERROR: string = 'devtimer/dashboard/EDIT_PROJECT_ERROR';
const CREATE_TASK: string = 'devtimer/dashboard/CREATE_TASK';
const CREATE_TASK_SUCCESS: string = 'devtimer/dashboard/CREATE_TASK_SUCCESS';
const CREATE_TASK_ERROR: string = 'devtimer/dashboard/CREATE_TASK_ERROR';
const SAVE_PROJECT_FORM_ERRORS: string = 'devtimer/dashboard/SAVE_PROJECT_FORM_ERRORS';
const SAVE_TASK_FORM_ERRORS: string = 'devtimer/dashboard/SAVE_TASK_FORM_ERRORS';
const SELECT_PROJECT: string = 'devtimer/dashboard/SELECT_PROJECT';
const CLEAN_SESSION: string = 'devtimer/dashboard/CLEAN_SESSION';
const LOAD_PROJECTS: string = 'devtimer/dashboard/LOAD_PROJECTS';
const LOAD_TASKS: string = 'devtimer/dashboard/LOAD_TASKS';
const SELECT_TASK: string = 'devtimer/dashboard/SELECT_TASK';

const initialState: DashboardState = {
  isButtonLoading: {
    project: false,
    task: false,
  },
  projects: null,
  projectFormErrors: {},
  selectedProject: null,
  taskFormErrors: {},
  tasks: null,
  selectedTask: null,
}

const dashboardReducer = (state: DashboardState = initialState, action: Action): DashboardState => {
  switch (action.type) {
    case CREATE_PROJECT:
    case EDIT_PROJECT:
      return {
        ...state,
        isButtonLoading: {
          ...state.isButtonLoading,
          project: true,
        }
      }
    case CREATE_PROJECT_SUCCESS:
    case CREATE_PROJECT_ERROR:
    case EDIT_PROJECT_ERROR:
      return {
        ...state,
        isButtonLoading: {
          ...state.isButtonLoading,
          project: false,
        },
      }
    case EDIT_PROJECT_SUCCESS:
      return {
        ...state,
        isButtonLoading: {
          ...state.isButtonLoading,
          project: false,
        },
        selectedProject: action.payload,
      }
    case CREATE_TASK: {
      return {
        ...state,
        isButtonLoading: {
          ...state.isButtonLoading,
          task: true,
        }
      }
    }
    case CREATE_TASK_SUCCESS:
    case CREATE_TASK_ERROR:
      return {
        ...state,
        isButtonLoading: {
          ...state.isButtonLoading,
          task: false,
        }
      }
    case SAVE_PROJECT_FORM_ERRORS:
      return {
        ...state,
        projectFormErrors: action.payload,
        isButtonLoading: {
          ...state.isButtonLoading,
          project: JSON.stringify(action.payload) === '{}' ? true : false,
        }
      }
    case SELECT_PROJECT:
      return {
        ...state,
        selectedProject: action.payload,
        tasks: null,
      }
    case CLEAN_SESSION:
      return {
        ...state,
        projects: null,
        tasks: null,
        selectedProject: null,
        selectedTask: null,
        projectFormErrors: {},
      }
    case LOAD_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      }
    case LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload,
      }
    case SAVE_TASK_FORM_ERRORS:
      return {
        ...state,
        taskFormErrors: action.payload,
        isButtonLoading: {
          ...state.isButtonLoading,
          task: JSON.stringify(action.payload) === '{}' ? true : false,
        }
      }
    case SELECT_TASK:
      return {
        ...state,
        selectedTask: action.payload,
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

export const createProjectErrorAction = (): Action => ({
  type: CREATE_PROJECT_ERROR,
});

export const editProjectAction = (): Action => ({
  type: EDIT_PROJECT,
});

export const editProjectSuccessAction = (project: Project): Action => ({
  type: EDIT_PROJECT_SUCCESS,
  payload: project,
});

export const editProjectErrorAction = (): Action => ({
  type: EDIT_PROJECT_ERROR,
});

export const createTaskAction = (): Action => ({
  type: CREATE_TASK,
});

export const createTaskSuccessAction = (): Action => ({
  type: CREATE_TASK_SUCCESS,
});

export const createTaskErrorAction = (): Action => ({
  type: CREATE_TASK_ERROR,
});

export const saveProjectFormErrorsAction = (errors: ProjectFormErrors): Action => ({
  type: SAVE_PROJECT_FORM_ERRORS,
  payload: errors,
});

export const saveTaskFormErrorsAction = (errors: TaskFormErrors): Action => ({
  type: SAVE_TASK_FORM_ERRORS,
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

export const loadTasksAction = (tasks: any): Action => ({
  type: LOAD_TASKS,
  payload: tasks,
});

export const selectTaskAction = (task: Task): Action => ({
  type: SELECT_TASK,
  payload: task,
});