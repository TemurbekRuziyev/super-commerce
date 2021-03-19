import styled from 'styled-components';

import { ReactComponent as InputSvg } from '../../assets/checkbox-checked.svg';

export const ScheduleContainer = styled.div`
  padding: 1rem;
`;

export const ScheduleInput = styled.input`
  margin-right: 1rem;
  padding: 0.7rem 1rem;
  outline: none;
  background-color: white;
  font-size: 1.4rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  border: 2px solid #ffad48;
  &:focus,
  &:valid {
    border: 2px solid #00ff00;
  }
  &:first-child {
    width: 40%;
  }

  &:last-child {
    width: 10%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const InputBtn = styled(InputSvg)`
  cursor: pointer;
  fill: #ffad48;
  transition: all 0.2s ease-in-out;

  &:focus,
  &:hover {
    fill: #00ff00;
  }
`;

export const ScheduleElements = styled.div`
  display: flex;
  flex-direction: column;
`;
