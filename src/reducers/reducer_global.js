import { UPDATE_GLOBAL, UPLOAD_TASKS, UPDATE_TASKS, UPDATE_NEW_TASK, FETCH_TASKS } from '../actions/index';

export default (state = {}, action) => {
  if ( action.type === UPDATE_GLOBAL ) {

    return { ...state, ...action.payload };

  } else if ( action.type === UPLOAD_TASKS && action.payload.status === 200 ) {

    return { ...state, changeMade: false };

  } else if ( action.type === UPDATE_TASKS || action.type === UPDATE_NEW_TASK ) {

    return { ...state, changeMade: true };

  } else if ( action.type === FETCH_TASKS && action.payload.status === 200 ) {

    return { ...state, taskFetched: true };

  }

  return state;
}