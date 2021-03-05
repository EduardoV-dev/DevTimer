import { combineReducers } from 'redux';
import uiReducer from './ui';
import signInReducer from './signIn';
import dashboardReducer from './dashboard';

export default combineReducers({
  ui: uiReducer,
  signIn: signInReducer,
  dashboard: dashboardReducer,
});