import styled from 'styled-components';

import { ReactComponent as CancelIcon } from '../../assets/cancel-circle.svg';

export const ScheduleItemContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 0.9rem 1.5rem;
  border: 2px solid rgba(0, 0, 0, 0.8);
  border-radius: 8px 13px;
  margin: 0.4rem;

  &:first-child {
    margin-top: 2rem;
  }
  &:hover .btn-clear {
    fill: #ffad48;
  }
`;

export const ScheduleItemName = styled.h4`
  font-size: 1.8rem;
  flex: 0 1 50%;
`;

export const ScheduleItemAmount = styled.h4`
  font-size: 1.8rem;
  flex: 0 1 10%;
`;

export const CancelIconStyle = styled(CancelIcon)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
  fill: rgba(0, 255, 0, 0.4);
`;
