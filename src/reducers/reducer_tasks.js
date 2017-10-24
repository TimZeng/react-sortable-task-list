import { FETCH_TASKS, SAVE_TASKS } from '../actions/index';

export default (state = [], action) => {
  if ( action.type === FETCH_TASKS && action.payload.status === 200 ) {
    return action.payload.data.tasks;
  } else if ( action.type === SAVE_TASKS && action.payload.status === 200 ) {
    return action.payload.data.tasks;
  }

  return state;
}