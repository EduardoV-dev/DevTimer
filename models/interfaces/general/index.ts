export interface RootState { 
  ui: UiState;
  auth: AuthState;
}

export interface UiState {
  isUiLoading: boolean;
  isMenuDisplayed: boolean;
  isFacebookButtonLoading: boolean;
  isGithubButtonLoading: boolean;
}

export interface AuthState {
  user: any;
}

export interface Action {
  type: string;
  payload?: any;
}