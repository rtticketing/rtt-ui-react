import React from 'react';
import { storiesOf } from '@storybook/react';

import { GridRow, InjectedProps } from './GridRow';

// given
const props = {
  row: [
    {
      name: 'foo',
      desc: 'my name is {name}'
    },
    {
      name: 'bar',
      desc: 'my name is {name}'
    },
    {
      name: 'baz',
      desc: 'my name is not {name} you idiot!'
    }
  ],
  rowIndex: 0,
  classNames: {
    grid__row: true,
    'grid__row--awesome': false
  }
};

const Column = <T extends any>(props: InjectedProps<T>) => {
  return (
    <div>
      <strong>Column Index: {props.columnIndex}</strong>
      <p>{props.column.desc.replace('{name}', props.column.name)}</p>
    </div>
  );
};

storiesOf('GridRow', module).add('GridRow', () => <GridRow {...props}>{Column}</GridRow>);
