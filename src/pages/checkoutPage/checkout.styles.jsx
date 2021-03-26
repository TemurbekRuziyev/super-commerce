import styled from 'styled-components';

import { ReactComponent as DollarSign } from '../../assets/coin-dollar.svg';

export const CheckoutContainer = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
  text-align: end;
`;

export const CheckoutTotalMoney = styled.h2`
  font-size: 3rem;
  width: 100%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 1rem;
`;

export const CheckoutDollar = styled(DollarSign)`
    width: 3.5rem;
    height: 3.5rem;
    fill: black;
`;
