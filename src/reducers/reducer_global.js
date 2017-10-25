import { UPDATE_GLOBAL, UPLOAD_TASKS } from '../actions/index';

export default (state = {}, action) => {
  if ( action.type === UPDATE_GLOBAL ) {
    return { ...state, ...action.payload };
  } else if ( action.type === UPLOAD_TASKS && action.payload.status === 200 ) {
    return { ...state, changeMade: false };
  }

  return state;
}