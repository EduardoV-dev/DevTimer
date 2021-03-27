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
  isModalDisplayed: {
    project: FormAction;
    task: FormAction;
  };
  isAlertDisplayed: {
    project: false,
    task: false,
  };
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
    project: boolean;
    task: boolean;
  }
  projects: Project[];
  projectFormErrors: ProjectFormErrors;
  selectedProject: null | Project;
  taskFormErrors: TaskFormErrors;
  tasks: Task[];
  selectedTask: null | Task;
  isTiming: boolean | null;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface NotificationMessages {
  success: {
    project_created: Notification;
    task_created: Notification;
    project_edited: Notification;
    task_edited: Notification;
    project_deleted?: Notification;
    task_deleted?: Notification;
    task_time?: Notification;
  },
  error: {
    project_created: Notification;
    task_created: Notification;
    project_edited?: Notification;
    task_edited?: Notification;
    project_deleted?: Notification;
    task_deleted?: Notification;
    network: Notification;
    getProjectsById: Notification;
    getTasksById: Notification;
    task_time?: Notification;
  },
}

export interface FormAction {
  add: boolean;
  edit: boolean;
}