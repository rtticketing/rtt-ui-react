import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, InjectedProps } from './Grid';

const gridData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const RowComponent = <T extends any>(props: InjectedProps<T>) => {
  return (
    <div>
      <dl>
        <dt>RowIndex: {props.rowIndex}</dt>
        {props.row.map(col => (
          <dd>col contents: {col}</dd>
        ))}
      </dl>
    </div>
  );
};

storiesOf('Grid', module)
  .add('columns: 3', () => (
    <Grid columns={3} gridData={gridData}>
      {RowComponent}
    </Grid>
  ))
  .add('columns: 4', () => (
    <Grid columns={4} gridData={gridData}>
      {RowComponent}
    </Grid>
  ))
  .add('columns: 5', () => (
    <Grid columns={5} gridData={gridData}>
      {RowComponent}
    </Grid>
  ));
