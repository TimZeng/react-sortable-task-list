import { ADD_NEW_TASK, UPDATE_NEW_TASK, UPLOAD_TASKS } from '../actions/index';

export default (state = null, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return '';

    case UPDATE_NEW_TASK:
      return action.payload;

    case UPLOAD_TASKS:
      return null;
  }

  return state;
}