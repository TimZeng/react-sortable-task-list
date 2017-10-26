import {
  FETCH_TASKS_FAILURE, UPLOAD_TASKS_SUCCESS, UPLOAD_TASKS_FAILURE, RESET_ALERT
} from '../actions/index';

export default (state = {}, action) => {

  switch ( action.type ) {

    case UPLOAD_TASKS_SUCCESS:
      return { status: 200, message: 'Tasks saved successfully.' };

    case UPLOAD_TASKS_FAILURE:
      return { status: 400, message: 'There is an issue saving your tasks, please try again.' };

    case FETCH_TASKS_FAILURE:
      return { status: 400, message: 'There is an issue loading your tasks, please try again.' };

    case RESET_ALERT:
      return {};

  }

  return {};
}