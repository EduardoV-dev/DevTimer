import { NotificationType } from "../../types/components";
import { Provider } from "../../types/general";
import { Project, ProjectErrors } from "../dashboard";

export interface RootState {
  ui: UiState;
  auth: AuthState;
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
  isButtonLoading: {
    facebook: boolean;
    github: boolean;
    addProject: boolean;
    addTask: boolean;
  }
  isNotificationShown: boolean;
  notification: Notification;
}

export interface AuthState {
  user: any;
}

export interface DashboardState {
  projects: Project[];
  projectErrors: ProjectErrors;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface ButtonLoading {
  provider: Provider;
  loadingState: boolean;
}
