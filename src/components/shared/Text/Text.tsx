import React from 'react';

export interface TextProps {
  value: string | number;
}

export const Text = (props: TextProps) => <span>{props.value}</span>;
