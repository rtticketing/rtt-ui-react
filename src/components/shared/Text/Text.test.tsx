import React from 'react';
import { shallow } from 'enzyme';
import { Text } from './Text';

it('renders child component with render props', () => {
  const msg = 'Hello';
  const value = <span>{msg}</span>;
  const wrapper = shallow(<Text value={msg} />);

  expect(wrapper.contains(value)).toBe(true);
});
