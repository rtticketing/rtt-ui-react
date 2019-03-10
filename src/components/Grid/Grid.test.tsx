import React from 'react';
import { chunk, Grid } from './index';
import { mount } from 'enzyme';

describe('createGrid', () => {
  it('should make grid', () => {
    //given
    const size = 3;
    const data = [1, 2, 3, 4, 5, 6, 7];

    //when
    const result = chunk(data, size);

    //then
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });
});

describe('Grid', () => {
  it('should render child with separate chunk', () => {
    //given
    const Child = props => <span>{props.text}</span>;
    const data = [{ text: 'hello' }, { text: 'world' }, { text: 'I' }, { text: 'find' }, { text: 'react' }, { text: 'kind of' }, { text: 'amazing' }];
    const columns = 2;
    const render = props => {
      return (
        <div key={props.rowIndex}>
          {props.row.map((col, i) => (
            <Child text={col.text} key={i} />
          ))}
        </div>
      );
    };
    //when

    const wrapper = mount(
      <Grid gridData={data} columns={columns}>
        {render}
      </Grid>
    );

    //then
    // expect(wrapper.containsAllMatchingElements)
  });
});

class Controller {
  constructor(store, mediaPlayerRef) {}

  onUserPlay() {}
}
