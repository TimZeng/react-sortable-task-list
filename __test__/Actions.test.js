import * as actions from '../src/actions';

describe('Regular Actions', () => {
  it('should create an action to update tasks', () => {
    const payload = 'updating tasks'
    const expectedAction = {
      type: actions.UPDATE_TASKS,
      payload
    }
    expect(actions.updateTasks(payload)).toEqual(expectedAction)
  });

  it('should create an action to add new task', () => {
    const expectedAction = {
      type: actions.ADD_NEW_TASK
    }
    expect(actions.addNewTask()).toEqual(expectedAction)
  });

  it('should create an action to update new task', () => {
    const payload = 'updating new task'
    const expectedAction = {
      type: actions.UPDATE_NEW_TASK,
      payload
    }
    expect(actions.updateNewTask(payload)).toEqual(expectedAction)
  });

  it('should create an action to reset alert', () => {
    const expectedAction = {
      type: actions.RESET_ALERT
    }
    expect(actions.resetAlert()).toEqual(expectedAction)
  });
})