import TasksReducer from '../src/reducers/reducer_tasks';
import * as actions from '../src/actions';

const mockData = ['test1', 'test2', 'test3'];

describe('tasks reducer', () => {
  it('should return the initial state', () => {
    expect(TasksReducer([], {})).toEqual([])
  })

  it('should handle FETCH_TASKS_SUCCESS', () => {
    expect(
      TasksReducer([], {
        type: actions.FETCH_TASKS_SUCCESS,
        payload: mockData
      })
    ).toEqual(mockData)

    expect(
      TasksReducer(
        ['initial'],
        {
          type: actions.FETCH_TASKS_SUCCESS,
          payload: mockData
        }
      )
    ).toEqual(mockData)
  })

  it('should handle UPLOAD_TASKS_SUCCESS', () => {
    expect(
      TasksReducer([], {
        type: actions.UPLOAD_TASKS_SUCCESS,
        payload: mockData
      })
    ).toEqual(mockData)

    expect(
      TasksReducer(
        ['initial'],
        {
          type: actions.UPLOAD_TASKS_SUCCESS,
          payload: mockData
        }
      )
    ).toEqual(mockData)
  });

  it('should handle UPDATE_TASKS', () => {
    expect(
      TasksReducer([], {
        type: actions.UPDATE_TASKS,
        payload: mockData
      })
    ).toEqual(mockData)

    expect(
      TasksReducer(
        ['initial'],
        {
          type: actions.UPDATE_TASKS,
          payload: mockData
        }
      )
    ).toEqual(mockData)
  });
})