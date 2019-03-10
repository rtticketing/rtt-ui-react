import React from 'react';
import { shallow } from 'enzyme';
import { Grid, InjectedProps } from './Grid';

describe('Grid', () => {
  it('should inject rows to child componet', () => {
    //given
    const props = {
      columns: 3,
      gridData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };

    const RowComponent = <T extends any>(props: InjectedProps<T>) => {
      return (
        <div data-row-index={props.rowIndex} key={props.rowIndex}>
          {props.row.map((col, i) => (
            <span key={i}>{col}</span>
          ))}
        </div>
      );
    };

    //when
    const wrapper = shallow(<Grid {...props}>{RowComponent}</Grid>);

    //then
    expect(wrapper.find('[data-row-index]').length).toBe(Math.ceil(props.gridData.length / props.columns));
    expect(wrapper.find('[data-row-index=0]').children().length).toBe(props.columns);
  });
});
