import axios from 'axios';

const URL = 'http://cfassignment.herokuapp.com/timzeng/tasks';

const FETCH_TASKS = 'FETCH_TASKS';

export const fetchTasks = () => {
  const request = axios.get(URL);

  return {
    type: FETCH_TASKS,
    payload: request
  }
}