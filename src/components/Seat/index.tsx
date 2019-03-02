import React from 'react';
import c from 'classnames';
import styles from './Seat.module.css';

interface PayloadType {
  selected: boolean;
  ticketId: string | number;
}

interface SeatProps {
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
      className={c(
        styles.seat,
        {
          [styles.selected]: props.selected,
          [styles.unavailable]: !props.available
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
