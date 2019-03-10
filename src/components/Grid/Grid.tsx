import React, { Fragment } from 'react';
import { splitEvery, flatten } from 'ramda';

export interface GridProps<GridItemModel> {
  columns: number;
  gridData: GridItemModel[];
  children: (props: InjectedProps<GridItemModel>) => JSX.Element;
}

export interface InjectedProps<T> {
  row: T[];
  rowIndex: number;
}

export const Grid = <T extends any>(props: GridProps<T>) => {
  const rows = splitEvery(props.columns, props.gridData);
  const cols = rows.map((row: T[], rowIndex: number) =>
    props.children({
      row,
      rowIndex
    })
  );
  return <Fragment>{cols}</Fragment>;
};
