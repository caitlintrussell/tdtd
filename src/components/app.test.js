import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './app';
import Header from './header/header';

it('shows a header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header).length).toEqual(1);
});

