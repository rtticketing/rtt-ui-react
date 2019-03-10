import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Seat, SeatProps } from './index';
import { Theme } from '../Theme/index';
import vars from '../../theme.module.css';

const seat: SeatProps = {
  ticketId: 'A14',
  available: true
};

const actions = {
  onClick: action('onClick')
};

storiesOf('Seat', module)
  .add('default', () => <Theme vars={vars}>{() => <Seat {...seat} {...actions} />}</Theme>)
  .add('unavailable', () => <Theme vars={vars}>{() => <Seat {...{ ...seat, available: false }} {...actions} />}</Theme>)
  .add('selected', () => <Theme vars={vars}>{() => <Seat {...{ ...seat, selected: true }} {...actions} />}</Theme>);
