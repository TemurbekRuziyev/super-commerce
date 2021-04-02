import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addItemToSchedule } from '../../redux/schedule/schedule.actions';
import ScheduleElement from '../scheduleElement/scheduleElement.component';
import {
  selectScheduleItem,
  selectScheduleList,
} from '../../redux/schedule/schedule.selector';

import {
  ScheduleContainer,
  ScheduleInput,
  InputContainer,
  InputBtn,
  ScheduleElements,
} from './schedule.styles';

const Schedule = ({ addItem, items, item }) => {
  //States
  const [inputValue, setInputValue] = useState({
    name: '',
    number: 1,
  });
  const [inputRef1, setInputRef1] = useState(React.createRef());
  const [inputRef2, setInputRef2] = useState(React.createRef());
  //Lifecycle methods
  useEffect(() => {
    inputRef1.current.focus();
  }, []);

  useEffect(() => {
    if (item) {
      setInputValue({ name: item.name, number: item.number });
    } else {
      setInputValue({ name: '', number: '' });
    }
  }, [item]);

  const { name, number } = inputValue;

  //Methods
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
    
    inputRef1.current.focus();
  };

  const handleKeyPress = event => {
    if (event.keyCode === 13 || event.which === 13) handleSubmit();
  };

  const handleEnter = event => {
    if (event.keyCode === 13 || event.which === 13) {
      inputRef2.current.focus();
    }
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
          ref={inputRef1}
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
        <ScheduleInput
          type='number'
          value={number}
          name='number'
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          ref={inputRef2}
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
  item: selectScheduleItem,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToSchedule(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
