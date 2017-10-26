import AlertReducer from '../src/reducers/reducer_alert';
import * as actions from '../src/actions';

const saveSuccessMsg = 'Tasks saved successfully.';
const saveFailureMsg = 'There is an issue saving your tasks, please try again.';
const fetchFailureMsg = 'There is an issue loading your tasks, please try again.';

describe('tasks reducer', () => {
  it('should return the initial state', () => {
    expect(AlertReducer({}, {})).toEqual({})
  })

  it('should handle UPLOAD_TASKS_SUCCESS', () => {
    expect(
      AlertReducer({}, {
        type: actions.UPLOAD_TASKS_SUCCESS
      })
    ).toEqual({status: 200, message: saveSuccessMsg})

    expect(
      AlertReducer(
        {message: 'initial'},
        {
          type: actions.UPLOAD_TASKS_SUCCESS
        }
      )
    ).toEqual({status: 200, message: saveSuccessMsg})
  })

  it('should handle UPLOAD_TASKS_FAILURE', () => {
    expect(
      AlertReducer({}, {
        type: actions.UPLOAD_TASKS_FAILURE
      })
    ).toEqual({status: 400, message: saveFailureMsg})

    expect(
      AlertReducer(
        {message: 'initial'},
        {
          type: actions.UPLOAD_TASKS_FAILURE
        }
      )
    ).toEqual({status: 400, message: saveFailureMsg})
  });

  it('should handle FETCH_TASKS_FAILURE', () => {
    expect(
      AlertReducer({}, {
        type: actions.FETCH_TASKS_FAILURE
      })
    ).toEqual({status: 400, message: fetchFailureMsg})

    expect(
      AlertReducer(
        {message: 'initial'},
        {
          type: actions.FETCH_TASKS_FAILURE
        }
      )
    ).toEqual({status: 400, message: fetchFailureMsg})
  });

  it('should handle RESET_ALERT', () => {
    expect(
      AlertReducer({}, {
        type: actions.RESET_ALERT
      })
    ).toEqual({})

    expect(
      AlertReducer(
        {message: 'initial'},
        {
          type: actions.RESET_ALERT
        }
      )
    ).toEqual({})
  });
})