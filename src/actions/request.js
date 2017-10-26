import axios from 'axios';

const URL = 'http://cfassignment.herokuapp.com/timzeng/tasks';

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
export const UPLOAD_TASKS_REQUEST = 'UPLOAD_TASKS_REQUEST';
export const UPLOAD_TASKS_SUCCESS = 'UPLOAD_TASKS_SUCCESS';
export const UPLOAD_TASKS_FAILURE = 'UPLOAD_TASKS_FAILURE';

const fetchTasksRequest = () => ({type: FETCH_TASKS_REQUEST});
const fetchTasksSuccess = res => ({type: FETCH_TASKS_SUCCESS, payload: res.data.tasks});
const fetchTasksFailure = error => ({type: FETCH_TASKS_FAILURE, payload: error});

export const fetchTasks = () => {
  return dispatch => {
    dispatch(fetchTasksRequest())
    return axios.get(URL)
      .then(res => dispatch(fetchTasksSuccess(res)))
      .catch(err => dispatch(fetchTasksFailure(err)));
  }
};

const uploadTasksRequest = () => ({type: UPLOAD_TASKS_REQUEST});
const uploadTasksSuccess = res => ({type: UPLOAD_TASKS_SUCCESS, payload: res.data.tasks});
const uploadTasksFailure = error => ({type: UPLOAD_TASKS_FAILURE, payload: error});

export const uploadTasks = tasks => {
  return dispatch => {
    dispatch(uploadTasksRequest())
    return axios.post(URL, {tasks})
      .then(res => dispatch(uploadTasksSuccess(res)))
      .catch(err => dispatch(uploadTasksFailure(err)));
  }
};