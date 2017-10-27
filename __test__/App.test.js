import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new EnzymeAdapter() });
import toJson from 'enzyme-to-json';

import { App } from '../src/containers/app';

describe('App component should render dynamically', () => {
  let wrapper, taskLen, alertCount, newTaskCount
  const fetchTasks = () => {};
  const global = { changeMade: false, tasksFetched: true };
  const newTask = 'new task for testing';
  const tasks = ['task1','task2','task3'];
  const successAlert = {status: 200, message: 'success'};

  it('should render newTasks when it exist', () => {
    const props = {fetchTasks, global, newTask, alert: {}, tasks };
    const component = shallow(<App {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('input').length).toBe(1);
    expect(component.find('input').props().value).toEqual(newTask);
  })

  it('should NOT render newTasks when value is null', () => {
    const props = {fetchTasks, global, newTask: null, alert: {}, tasks };
    const component = shallow(<App {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('input').length).toBe(0);
  })

  it('should render alert when it exist', () => {
    const props = {fetchTasks, global, newTask: null, alert: successAlert, tasks };
    const component = shallow(<App {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })

  it('should NOT render list item when tasks is empty', () => {
    const props = {fetchTasks, global, newTask: null, alert: {}, tasks:[] };
    const component = shallow(<App {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })

  it('should enable saving when list fetched and change made', () => {
    const props = {fetchTasks, global: { changeMade: true, tasksFetched: true }, newTask: null, alert: {}, tasks:[] };
    const component = shallow(<App {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })

});


