import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './header';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Header />);
});

it('renders an h1 with the title of the app', () => {
  expect(wrapper.find('h1')).toHaveLength(1);
  expect(wrapper.text()).toContain('TD TD');
});

it('renders two icons', () => {
  expect(wrapper.find(FontAwesomeIcon).length).toEqual(2);
});
