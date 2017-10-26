import { ADD_NEW_TASK, UPDATE_NEW_TASK, UPLOAD_TASKS_REQUEST } from '../actions/index';

export default (state = null, action) => {

  switch (action.type) {

    case ADD_NEW_TASK:
      return '';

    case UPDATE_NEW_TASK:
      return action.payload;

    case UPLOAD_TASKS_REQUEST:
      return null;

  }

  return state;
}