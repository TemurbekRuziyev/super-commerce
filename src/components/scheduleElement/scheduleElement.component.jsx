import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromSchedule } from '../../redux/schedule/schedule.actions';

import {
  ScheduleItemContainer,
  ScheduleItemName,
  ScheduleItemAmount,
  CancelIconStyle,
} from './scheduleElement.styles';

const ScheduleElement = ({ item, removeItem }) => {
  return (
    <ScheduleItemContainer>
      <ScheduleItemName>{item.name}</ScheduleItemName>
      <ScheduleItemAmount>{item.number}</ScheduleItemAmount>
      <CancelIconStyle className='btn-clear' onClick={() => removeItem(item)} />
    </ScheduleItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromSchedule(item)),
});

export default connect(null, mapDispatchToProps)(ScheduleElement);
