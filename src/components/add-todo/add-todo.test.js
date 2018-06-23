import React from 'react';
import {mount} from 'enzyme';
import AddTodo from './add-todo';

let wrapper;
beforeEach(() => {
  wrapper = mount(<AddTodo />);
});
afterEach(() => {
  wrapper.unmount();
});

it('renders a form and a button', () => {
  expect(wrapper.find('form')).toHaveLength(1);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('button')).toHaveLength(1);
});

it('renders error class upon incomplete user input', () => {
  // TODO
});
