export * from './request';

export const UPDATE_TASKS = 'UPLOAD_TASKS';

export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const UPDATE_NEW_TASK = 'UPDATE_NEW_TASK';

export const RESET_ALERT = 'RESET_ALERT';

export const updateTasks = tasks => ({type: UPDATE_TASKS, payload: tasks});

export const addNewTask = () => ({type: ADD_NEW_TASK});

export const updateNewTask = newTask => ({type: UPDATE_NEW_TASK, payload: newTask});

export const resetAlert = () => ({type: RESET_ALERT});

