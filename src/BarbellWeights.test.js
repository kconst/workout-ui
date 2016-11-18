import React from 'react';
import BarbellWeights from './BarbellWeights.js';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

// fixes enzyme's issue with jest
jest.mock('react/lib/ReactDefaultInjection');

it('renders correctly in default state', () => {
  const component = renderer.create(<BarbellWeights useImperial={ false } weight={ 100 }/>);
  
  let weights = component.toJSON();
  expect(weights).toMatchSnapshot();
  
  
  expect(renderer.create(<BarbellWeights useImperial={ true } weight={ 225 }/>).toJSON()).toMatchSnapshot();
});

/*it ('should have the correct total for metric weights', () => {
  const component = shallow(<PlatesSelect useImperial={ false }/>);
  
  component.find('.plate-15').simulate('click');
  
  expect(component.find('h3').text()).toEqual('50');
});*/