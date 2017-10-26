import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';
import NewTaskReducer from './reducer_newTask';
import GlobalReducer from './reducer_global';
import AlertReducer from './reducer_alert';

const rootReducer = combineReducers({
  tasks: TasksReducer,
  newTask: NewTaskReducer,
  global: GlobalReducer,
  alert: AlertReducer
});

export default rootReducer;
