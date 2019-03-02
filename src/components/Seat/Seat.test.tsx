import React from 'react';
import { shallow } from 'enzyme';
import styles from './Seat.module.css';
import { Seat } from './index';

describe('<Seat/>', () => {
  describe('selected prop', () => {
    it('should have selected class name', () => {
      //given
      const selected = true;
      const ticketId = 1;
      const available = true;

      //when
      const wrapper = shallow(<Seat selected={selected} ticketId={ticketId} available={available} />);

      //then
      expect(wrapper.hasClass(styles.selected)).toBe(true);
    });

    it('should not have selected class name', () => {
      //given
      const selected = false;
      const ticketId = 1;
      const available = true;

      //when
      const wrapper = shallow(<Seat selected={selected} ticketId={ticketId} available={available} />);

      //then
      expect(wrapper.hasClass(styles.selected)).toBe(false);
    });
  });

  describe('ticketId prop', () => {
    it('should render ticket id', () => {
      //given
      const ticketId = 1;
      const available = true;

      //when
      const wrapper = shallow(<Seat ticketId={ticketId} available={available} />);

      //then
      expect(wrapper.text()).toBe(String(ticketId));
    });
  });

  describe('onClick prop', () => {
    it('should be invoked when button is clicked', () => {
      //given
      const ticketId = 1;
      const selected = true;
      const onClick = jest.fn();
      const available = true;

      //when
      const wrapper = shallow(<Seat ticketId={ticketId} selected={selected} onClick={onClick} available={available} />);
      wrapper.simulate('click');

      //then
      expect(onClick).toHaveBeenCalled();
    });

    it('should be invoked with current selection information', () => {
      //given
      const ticketId = 1;
      const selected = false;
      const onClick = jest.fn();
      const available = true;

      //when
      const wrapper = shallow(<Seat ticketId={ticketId} selected={selected} onClick={onClick} available={available} />);
      wrapper.simulate('click');

      //then
      expect(onClick.mock.calls[0][1]).toEqual({
        selected: false,
        ticketId
      });
    });

    it('should not be invoked when unavailable', () => {
      //given
      const ticketId = 1;
      const selected = false;
      const available = false;
      const onClick = jest.fn();

      //when
      const wrapper = shallow(<Seat ticketId={ticketId} selected={selected} onClick={onClick} available={available} />);
      wrapper.simulate('click');

      //then
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  it('should have unavailable class', () => {
    //given
    const selected = true;
    const ticketId = 1;
    const available = false;

    //when
    const wrapper = shallow(<Seat selected={selected} ticketId={ticketId} available={available} />);

    //then
    expect(wrapper.hasClass(styles.unavailable)).toBe(true);
  });
});
