import React from 'react';
import PlatesSelect from './PlatesSelect.js';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

// fixes enzyme's issue with jest
jest.mock('react/lib/ReactDefaultInjection');

it('renders correctly in default state', () => {
  const component = renderer.create(<PlatesSelect useImperial={ false }/>);
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it ('should have the correct total for metric weights', () => {
  const component = shallow(<PlatesSelect useImperial={ false }/>);
  
  component.find('.plate-15').simulate('click');
  
  expect(component.find('h3').text()).toEqual('50');
});

it ('should have the correct total for imperial weights', () => {
  const component = shallow(<PlatesSelect useImperial={ true }/>);
  
  component.find('.plate-45').simulate('click');
  
  expect(component.find('h3').text()).toEqual('135');
});
