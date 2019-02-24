import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

it('renders child component with render props', () => {
  const result = <div>Hello</div>;
  const wrapper = shallow(<Button render={props => result} />);

  expect(wrapper.contains(result)).toBe(true);
});
