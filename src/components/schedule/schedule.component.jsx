import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addItemToSchedule } from '../../redux/schedule/schedule.actions';
import ScheduleElement from '../scheduleElement/scheduleElement.component';
import { selectScheduleList } from '../../redux/schedule/schedule.selector';

import {
  ScheduleContainer,
  ScheduleInput,
  InputContainer,
  InputBtn,
  ScheduleElements,
} from './schedule.styles';

const Schedule = ({ addItem, items }) => {
  const [inputValue, setInputValue] = useState({
    name: '',
    number: 1,
  });

  const { name, number } = inputValue;

  const handleChange = event => {
    const { value, name } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = () => {
    if (name !== '' && number !== 0) {
      addItem({
        name: name,
        number: parseInt(number),
        id: items.length ? items[items.length - 1].id + 1 : 0,
      });
    }
    setInputValue({ name: '', number: 0 });

    document.getElementById('name').focus();
  };

  const handleKeyPress = event => {
    if (event.keyCode === 13 || event.which === 13) handleSubmit();

    console.log('Clicked');
  };

  return (
    <ScheduleContainer>
      <InputContainer>
        <ScheduleInput
          id='name'
          type='text'
          placeholder='Enter your next buying product name'
          name='name'
          value={name}
          onChange={handleChange}
        />
        <ScheduleInput
          type='number'
          value={number}
          name='number'
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <InputBtn onClick={handleSubmit} />
      </InputContainer>
      <ScheduleElements>
        {items.map(item => (
          <ScheduleElement key={item.id} item={item} />
        ))}
      </ScheduleElements>
    </ScheduleContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectScheduleList,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToSchedule(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);