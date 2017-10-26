import { FETCH_TASKS_SUCCESS, UPDATE_TASKS, UPLOAD_TASKS_SUCCESS } from '../actions/index';

export default (state = [], action) => {

  switch ( action.type ) {

    case FETCH_TASKS_SUCCESS:
      return action.payload;

    case UPLOAD_TASKS_SUCCESS:
      return action.payload;

    case UPDATE_TASKS:
      return action.payload;

  }

  return state;
}