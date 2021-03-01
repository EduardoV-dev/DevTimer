import { combineReducers } from 'redux';
import uiReducer from './ui';
import authReducer from './auth';
import dashboardReducer from './dashboard';

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;