import { ProjectErrors } from "../dashboard";

export interface RootState { 
  ui: UiState;
  auth: AuthState;
  dashboard: DashboardState;
}

export interface UiState {
  isUiLoading: boolean;
  isMenuDisplayed: boolean;
  isModalDisplayed: boolean;
  isFacebookButtonLoading: boolean;
  isGithubButtonLoading: boolean;
  isAddProjectButtonLoading: boolean;
  isAddTaskButtonLoading: boolean;
}

export interface AuthState {
  user: any;
}

export interface DashboardState {
  projectErrors: ProjectErrors;
}

export interface Action {
  type: string;
  payload?: any;
}