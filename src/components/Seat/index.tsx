import React from 'react';
import cn from 'classnames';
import styles from './Seat.module.css';

export interface PayloadType {
  selected: boolean;
  ticketId: string | number;
}

export interface SeatProps {
  selected?: boolean;
  ticketId: string | number;
  available: boolean;
  classNames?: string[];
  onClick?: (e: React.SyntheticEvent, payload: PayloadType) => void;
}

export const Seat = (props: SeatProps) => {
  return (
    <button
      type="button"
      className={cn(
        styles['seat'],
        {
          [styles['seat--selected']]: props.selected,
          [styles['seat--unavailable']]: !props.available
        },
        ...(props.classNames || [])
      )}
      onClick={e => {
        props.onClick &&
          props.available &&
          props.onClick(e, {
            selected: !!props.selected,
            ticketId: props.ticketId
          });
      }}
    >
      <span className={styles.ticket}>{props.ticketId}</span>
    </button>
  );
};
