import axios from 'axios';

const URL = 'http://cfassignment.herokuapp.com/timzeng/tasks';

export const FETCH_TASKS = 'FETCH_TASKS';
export const SAVE_TASKS = 'SAVE_TASKS';
export const UPDATE_GLOBAL = 'UPDATE_GLOBAL';

export const fetchTasks = () => {
  const request = axios.get(URL);

  return {
    type: FETCH_TASKS,
    payload: request
  }
};

export const saveTasks = tasks => {
  const request = axios.post(URL, {tasks});

  return {
    type: SAVE_TASKS,
    payload: request
  }
};

export const updateGlobal = data => ({type: UPDATE_GLOBAL, payload: data});