import React from 'react';

interface ThemeProps {
  vars: {
    [cssProperty: string]: string;
  };
  children: (props: ThemeProps) => JSX.Element;
}

export const Theme = (props: ThemeProps) => {
  return <div style={props.vars}>{props.children(props)}</div>;
};
