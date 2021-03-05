import { NotificationType } from "../../types/components";
import { Project, ProjectFormErrors, Task, TaskFormErrors } from "../dashboard";

export interface RootState {
  ui: UiState;
  signIn: SignInState;
  dashboard: DashboardState;
}

export interface Notification {
  type?: NotificationType;
  title?: string;
  message?: string;
}

export interface UiState {
  isUiLoading: boolean;
  isMenuDisplayed: boolean;
  isModalDisplayed: boolean;
  isNotificationShown: boolean;
  notification: Notification;
}

export interface SignInState {
  isButtonLoading: {
    facebook: boolean;
    github: boolean;
  }
  user: any;
  userErrors: any;
}

export interface DashboardState {
  isButtonLoading: {
    addProject: boolean;
    addTask: boolean;
  }
  projects: Project[];
  projectFormErrors: ProjectFormErrors;
  selectedProject: null | Project;
  taskFormErrors: TaskFormErrors;
  tasks: Task[];
  selectedTask: null | Project;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface NotificationMessages {
  success: {
    project: Notification,
    task: Notification,
  },
  error: {
    project: Notification,
    task: Notification,
    network: Notification,
    getProjectsById: Notification,
    getTasksById: Notification,
  },
}