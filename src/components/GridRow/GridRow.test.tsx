import React from 'react';
import { shallow } from 'enzyme';

import { GridRow, InjectedProps } from './GridRow';

const Column = <T extends any>(props: InjectedProps<T>) => (
  <div data-column-index={props.columnIndex} key={props.columnIndex}>
    {props.column}
  </div>
);

describe('GridRow', () => {
  const defaultProps = {
    row: [1, 2, 3, 4],
    rowIndex: 0,
    classNames: {
      foo: true,
      bar: false
    }
  };

  it('takes column as a child and renders with props', () => {
    //given
    const props = { ...defaultProps };

    //when
    const wrapper = shallow(<GridRow {...props}>{Column}</GridRow>);

    //then
    expect(wrapper.containsAllMatchingElements([<div>{props.row[0]}</div>, <div>{props.row[1]}</div>, <div>{props.row[2]}</div>, <div>{props.row[3]}</div>])).toBe(true);
    expect(wrapper.find('[data-column-index]').length).toBe(props.row.length);
    expect(wrapper.find('[data-column-index=0]').text()).toBe(String(props.row[0]));
  });

  it('takes classNames prop type and applies truthy ones', () => {
    //given
    const props = { ...defaultProps };

    //when
    const wrapper = shallow(<GridRow {...props}>{Column}</GridRow>);

    //then
    expect(wrapper.hasClass('foo')).toBe(true);
    expect(wrapper.hasClass('bar')).toBe(false);
  });
});
