import styled, { css } from 'styled-components';

import { ReactComponent as CancelIcon } from '../../assets/cancel-circle.svg';
import { ReactComponent as EditIcon } from '../../assets/pencil.svg';

const IconStyles = css`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: all 0.1s ease-in;
  fill: rgba(235, 235, 235, 0.822);
`;

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
  .btn-edit {
    margin-right: 1.5rem;
  }
  .btn-clear:hover {
    fill: #ffad48;
  }
  .btn-edit:hover {
    fill: #28cf28;
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

export const BtnContainer = styled.div`
  display: flex;
`;
export const EditIconStyle = styled(EditIcon)`
  ${IconStyles}
`;

export const CancelIconStyle = styled(CancelIcon)`
  ${IconStyles}
`;
