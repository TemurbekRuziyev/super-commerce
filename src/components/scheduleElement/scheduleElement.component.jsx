import React from 'react';
import { connect } from 'react-redux';

import {
  removeItemFromSchedule,
  editScheduleItem,
} from '../../redux/schedule/schedule.actions';

import {
  ScheduleItemContainer,
  ScheduleItemName,
  ScheduleItemAmount,
  CancelIconStyle,
  EditIconStyle,
  BtnContainer,
} from './scheduleElement.styles';

const ScheduleElement = ({ item, removeItem, editItem }) => {
  return (
    <ScheduleItemContainer>
      <ScheduleItemName>{item.name}</ScheduleItemName>
      <ScheduleItemAmount>{item.number}</ScheduleItemAmount>
      <BtnContainer>
        <EditIconStyle
          className='btn-edit'
          onClick={() => editItem(item)}
        />
        <CancelIconStyle
          className='btn-clear'
          onClick={() => removeItem(item)}
        />
      </BtnContainer>
    </ScheduleItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromSchedule(item)),
  editItem: item => dispatch(editScheduleItem(item)),
});

export default connect(null, mapDispatchToProps)(ScheduleElement);
