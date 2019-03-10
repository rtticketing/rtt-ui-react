export interface GridProps<T> {
  columns: number;
  gridData: T[];
  children: (props: InjectedProps) => JSX.Element;
}

export interface InjectedProps {
  row: any;
  rowIndex: number;
}

const flatten = <T extends any>(arr: T[]) => arr.reduce((acc, curr) => acc.concat(curr));

export const chunk = <T extends any>(arr: T, size: number) => {
  const result = [];
  const rows = Math.ceil(arr.length / size);

  for (let i = 0; result.length < rows; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export const Grid = <GridDataList extends any>(props: GridProps<GridDataList>) => {
  return flatten(
    chunk(props.gridData, props.columns).map((row, rowIndex) => {
      return props.children({ row, rowIndex });
    })
  );
};
