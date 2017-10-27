import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new EnzymeAdapter() });
import toJson from 'enzyme-to-json';

import { Button, Alert } from '../src/components/reusableComponents';

describe('Button component should render dynamically', () => {
  const text = 'button';
  const disabled = true;

  it('should render Button as expected', () => {
    const props = {text};
    const component = shallow(<Button {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('div.button').length).toBe(1);
    expect(component.find('div.disabled').length).toBe(0);
    expect(component.find('div.button').text()).toEqual(text);
  })

  it('should disable Button', () => {
    const props = {text, disabled};
    const component = shallow(<Button {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('div.button.disabled').length).toBe(1);
    expect(component.find('div').props().onClick).toEqual(null);
  })

});

describe('Alert component should render dynamically', () => {
  const successAlert = { status: 200, message: 'success' };
  const errorAlert = { status: 400, message: 'error' };

  it('should render Success Alert as expected', () => {
    const props = {alert: successAlert};
    const component = shallow(<Alert {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('span').text()).toEqual(successAlert.message);
  })

  it('should render Error Alert as expected', () => {
    const props = {alert: errorAlert};
    const component = shallow(<Alert {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('span').text()).toEqual(errorAlert.message);
  })

  it('should NOT render Alert', () => {
    const props = {alert: {}};
    const component = shallow(<Alert {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('div.alert').length).toBe(0);
  })

});
