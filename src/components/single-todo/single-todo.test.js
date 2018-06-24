import React from 'react';
import {mount} from 'enzyme';
import SingleTodo from './single-todo';

let wrapper;
beforeEach(() => {
  wrapper = mount(<SingleTodo />);
});

afterEach(() => {
  wrapper.unmount();
});

it('renders a toggle', () => {
  expect(wrapper.find('input')).toHaveLength(1);
});

it('renders passed in title and description', () => {
  expect(wrapper.find('h4')).toHaveLength(1);
  expect(wrapper.find('p')).toHaveLength(1);
});
