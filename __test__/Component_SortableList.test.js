import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new EnzymeAdapter() });
import toJson from 'enzyme-to-json';

import SortableListComponent from '../src/components/sortableList';

describe('SortableListComponent component should render dynamically', () => {
  const tasks = ['task1','task2','task3','task4','task5'];

  it('should render 3 list items', () => {
    const props = {items: tasks.slice(0, 3)};
    const component = mount(<SortableListComponent {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('.sortable-list-item').length).toBe(3);
  })

  it('should render 5 list items', () => {
    const props = {items: tasks.slice(0)};
    const component = mount(<SortableListComponent {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('.sortable-list-item').length).toBe(5);
  })

  it('should render NO list items', () => {
    const props = {items: []};
    const component = mount(<SortableListComponent {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('.sortable-list-item').length).toBe(0);
  })

});
