import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../src/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockData = ['1','2','3','4','5'];

describe('Async Actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should creates FETCH_TASKS_SUCCESS after successfuly fetching tasks', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { tasks: mockData }
      });
    });

    const expectedActions = [
      { type: actions.FETCH_TASKS_REQUEST },
      { type: actions.FETCH_TASKS_SUCCESS, payload: mockData },
    ];

    const store = mockStore({ tasks: [] })

    return store.dispatch(actions.fetchTasks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should creates FETCH_TASKS_FAILURE after successfuly fetching tasks', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: { error: 'BAD request' }
      });
    });

    const expectedActions = [
      { type: actions.FETCH_TASKS_REQUEST },
      { type: actions.FETCH_TASKS_FAILURE, payload: new TypeError('Request failed with status code 400') },
    ];

    const store = mockStore({ tasks: [] })

    return store.dispatch(actions.fetchTasks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should creates UPLOAD_TASKS_SUCCESS after successfuly saving tasks', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { tasks: mockData }
      });
    });

    const expectedActions = [
      { type: actions.UPLOAD_TASKS_REQUEST },
      { type: actions.UPLOAD_TASKS_SUCCESS, payload: mockData },
    ];

    const store = mockStore({ tasks: [] })

    return store.dispatch(actions.uploadTasks(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should creates UPLOAD_TASKS_FAILURE after saving tasks failed', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: { tasks: mockData }
      });
    });

    const expectedActions = [
      { type: actions.UPLOAD_TASKS_REQUEST },
      { type: actions.UPLOAD_TASKS_FAILURE, payload: new TypeError('Request failed with status code 400') },
    ];

    const store = mockStore({ tasks: [] })

    return store.dispatch(actions.uploadTasks(mockData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});