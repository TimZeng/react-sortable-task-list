import {
  FETCH_TASKS_SUCCESS, UPLOAD_TASKS_SUCCESS, UPDATE_TASKS, UPDATE_NEW_TASK
} from '../actions/index';

export default (state = {}, action) => {

  switch ( action.type ) {

    case FETCH_TASKS_SUCCESS:
      return { ...state, taskFetched: true };

    case UPLOAD_TASKS_SUCCESS:
      return { ...state, changeMade: false };

    case UPDATE_TASKS:
      return { ...state, changeMade: true };

    case UPDATE_NEW_TASK:
      return { ...state, changeMade: true };

  }

  return state;
}