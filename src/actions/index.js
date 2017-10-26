import axios from 'axios';

const URL = 'http://cfassignment.herokuapp.com/timzeng/tasks';

export const FETCH_TASKS = 'FETCH_TASKS';
export const UPDATE_TASKS = 'UPDATE_TASKS';
export const UPLOAD_TASKS = 'UPLOAD_TASKS';

export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const UPDATE_NEW_TASK = 'UPDATE_NEW_TASK';

export const UPDATE_GLOBAL = 'UPDATE_GLOBAL';
export const RESET_ALERT = 'RESET_ALERT';

export const fetchTasks = () => {
  const request = axios.get(URL);

  return {
    type: FETCH_TASKS,
    payload: request
  }
};

export const updateTasks = tasks => ({type: UPDATE_TASKS, payload: tasks});

export const uploadTasks = tasks => {
  const request = axios.post(URL, {tasks});

  return {
    type: UPLOAD_TASKS,
    payload: request
  }
};

export const addNewTask = () => ({type: ADD_NEW_TASK});
export const updateNewTask = newTask => ({type: UPDATE_NEW_TASK, payload: newTask});

export const resetAlert = () => ({type: RESET_ALERT});

export const updateGlobal = data => ({type: UPDATE_GLOBAL, payload: data});

