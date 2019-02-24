import React, { Component, PureComponent } from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  render: (props: ButtonProps) => JSX.Element;
  onClick?: (e: any) => undefined;
}

export const Button = (props: ButtonProps) => (
  <button className={styles.button} onClick={props.onClick}>
    {props.render(props)}
  </button>
);
