import { FETCH_TASKS, SAVE_TASKS, RESET_ALERT } from '../actions/index';

export default (state = {}, action) => {

  if ( action.type === SAVE_TASKS ) {

    const { status } = action.payload;
    return {
      status,
      message: `${status === 200 ? 'Tasks saved successfully!' : 'There is an issue saving your tasks, please try again.'}`
    }

  } else if ( action.type === FETCH_TASKS ) {

    const { status } = action.payload;
    if ( status !== 200 ) {
      return { status, message: 'There is an issue loading your tasks, please try again.' };
    }

  } else if ( action.type === RESET_ALERT ) {

    return {};

  }

  return state
}