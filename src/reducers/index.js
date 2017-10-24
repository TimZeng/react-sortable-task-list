import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';
import GlobalReducer from './reducer_global';

const rootReducer = combineReducers({
  tasks: TasksReducer,
  global: GlobalReducer
});

export default rootReducer;
