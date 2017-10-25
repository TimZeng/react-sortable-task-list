import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';
import GlobalReducer from './reducer_global';
import AlertReducer from './reducer_alert';

const rootReducer = combineReducers({
  tasks: TasksReducer,
  global: GlobalReducer,
  alert: AlertReducer
});

export default rootReducer;
