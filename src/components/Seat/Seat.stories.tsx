import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Seat, SeatProps } from './Seat';

const seat: SeatProps = {
  ticketId: 'A14',
  available: true
};

const actions = {
  onClick: action('onClick')
};

storiesOf('Seat', module)
  .add('default', () => <Seat {...seat} {...actions} />)
  .add('unavailable', () => <Seat {...{ ...seat, available: false }} {...actions} />)
  .add('selected', () => <Seat {...{ ...seat, selected: true }} {...actions} />);
