import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { App } from '../src/containers/app';

describe('>>>APP --- Dynamic Render REACT COMPONENTS',()=>{
  let wrapper, taskLen, alertCount, newTaskCount
  const fetchTasks = () => {};
  const global = { changeMade: false, tasksFetched: true };
  const newTasks = ['new task for testing','',null];
  const tasks = ['task1','task2','task3','task4','task5','task6','task7','task8','task9','task10'];
  const alerts = [{}, {status: 400, message: 'error'}, {status: 200, message: 'success'}];

  beforeEach(()=>{
    const randomTasks = tasks.slice(0, Math.floor(Math.random() * 10));
    const randomAlert = alerts[Math.floor(Math.random() * 3)];
    const randomNew = newTasks[Math.floor(Math.random() * 3)];

    taskLen = randomTasks.length;
    alertCount = !!randomAlert.message ? 1 : 0;
    newTaskCount = randomNew === null ? 0 : 1;

    wrapper = mount(<App newTask={randomNew} tasks={randomTasks} fetchTasks={fetchTasks} global={global} alert={randomAlert} />);
  });

  it('should render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('>>> should contain subcomponents: alert', () => {
    const alertCount = wrapper.find('.alert').length;
    expect(alertCount).toBe(alertCount);
  });

  it('>>> should contain subcomponents: buttons', () => {
    expect(wrapper.find('.button').length).toBe(2 + taskLen + alertCount + newTaskCount);
  });

  it('>>> should contain subcomponents: newTask', () => {
    const inputCount = wrapper.find('input[placeholder="New task"]').length;
    expect(inputCount).toBe(newTaskCount);
  });

  it('>>> should contain subcomponents: list items', () => {
    const listItemCount = wrapper.find('.sortable-list-item').length;
    expect(listItemCount).toBe(taskLen);
  });

});