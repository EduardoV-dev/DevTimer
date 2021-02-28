import { UiState, AuthState } from '../general';

export interface RootState { 
  ui: UiState;
  auth: AuthState;
}