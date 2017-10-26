import GlobalReducer from '../src/reducers/reducer_global';
import * as actions from '../src/actions';

const mockData = ['test1', 'test2', 'test3'];

describe('tasks reducer', () => {
  it('should return the initial state', () => {
    expect(GlobalReducer({}, {})).toEqual({})
  })

  it('should handle FETCH_TASKS_SUCCESS', () => {
    expect(
      GlobalReducer({}, {
        type: actions.FETCH_TASKS_SUCCESS
      })
    ).toEqual({taskFetched: true})

    expect(
      GlobalReducer(
        {otherState: 'otherState'},
        {
          type: actions.FETCH_TASKS_SUCCESS
        }
      )
    ).toEqual({otherState: 'otherState', taskFetched: true})
  })

  it('should handle UPLOAD_TASKS_SUCCESS', () => {
    expect(
      GlobalReducer({}, {
        type: actions.UPLOAD_TASKS_SUCCESS
      })
    ).toEqual({changeMade: false})

    expect(
      GlobalReducer(
        {otherState: 'otherState'},
        {
          type: actions.UPLOAD_TASKS_SUCCESS
        }
      )
    ).toEqual({otherState: 'otherState', changeMade: false})
  });

  it('should handle UPDATE_TASKS', () => {
    expect(
      GlobalReducer({}, {
        type: actions.UPDATE_TASKS
      })
    ).toEqual({changeMade: true})

    expect(
      GlobalReducer(
        {otherState: 'otherState'},
        {
          type: actions.UPDATE_TASKS
        }
      )
    ).toEqual({otherState: 'otherState', changeMade: true})
  });

  it('should handle UPDATE_NEW_TASK', () => {
    expect(
      GlobalReducer({}, {
        type: actions.UPDATE_NEW_TASK
      })
    ).toEqual({changeMade: true})

    expect(
      GlobalReducer(
        {otherState: 'otherState'},
        {
          type: actions.UPDATE_NEW_TASK
        }
      )
    ).toEqual({otherState: 'otherState', changeMade: true})
  });
})