import React from 'react';
import cn from 'classnames';

export interface GridRowProps<ColumnModel> {
  row: ColumnModel[];
  rowIndex: number;
  children: (props: InjectedProps<ColumnModel>) => JSX.Element;
  classNames: {
    [className: string]: boolean;
  };
}

export interface InjectedProps<ColumnModel> {
  column: ColumnModel;
  columnIndex: number;
}

export const GridRow = <ColumnModel extends any>(props: GridRowProps<ColumnModel>) => {
  return (
    <div className={cn(props.classNames)}>
      {props.row.map((column: ColumnModel, columnIndex: number) => {
        return props.children({
          column,
          columnIndex
        });
      })}
    </div>
  );
};
