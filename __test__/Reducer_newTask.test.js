import NewTaskReducer from '../src/reducers/reducer_newTask';
import * as actions from '../src/actions';

const mockData = 'test task';

describe('tasks reducer', () => {
  it('should return the initial state', () => {
    expect(NewTaskReducer(null, {})).toEqual(null)
  })

  it('should handle ADD_NEW_TASK', () => {
    expect(
      NewTaskReducer(null, {
        type: actions.ADD_NEW_TASK
      })
    ).toEqual('')

    expect(
      NewTaskReducer('initial', {
        type: actions.ADD_NEW_TASK
      })
    ).toEqual('')
  })

  it('should handle UPDATE_NEW_TASK', () => {
    expect(
      NewTaskReducer(null, {
        type: actions.UPDATE_NEW_TASK,
        payload: mockData
      })
    ).toEqual(mockData)

    expect(
      NewTaskReducer(
        'initial',
        {
          type: actions.UPDATE_NEW_TASK,
          payload: mockData
        }
      )
    ).toEqual(mockData)
  });

  it('should handle UPLOAD_TASKS_REQUEST', () => {
    expect(
      NewTaskReducer(null, {
        type: actions.UPLOAD_TASKS_REQUEST
      })
    ).toEqual(null)

    expect(
      NewTaskReducer(
        'initial',
        {
          type: actions.UPLOAD_TASKS_REQUEST
        }
      )
    ).toEqual(null)
  });
})