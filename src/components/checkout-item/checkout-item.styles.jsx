import styled, { css } from 'styled-components';

import { ReactComponent as Cancel } from '../../assets/bin2.svg';

const Center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnStyles = css`
  ${Center}
  cursor: pointer;
  background-color: #ebbe88;
  padding: 0.1rem;
  border: 0;
  border-radius: 3px;
  outline: none;
  transition: all 0.2s;

  &:hover {
    background-color: #f0ad5b;
  }
`;

export const CheckoutItemContainer = styled.div`
  ${Center}
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const CheckoutItemImageContainer = styled.div`
  width: 30%;
`;

export const CheckoutItemImage = styled.img`
display: block;
  width: 100%;
`;

export const CheckoutItemTitle = styled.div`
  flex: 0 25%;
`;

export const CheckoutItemPrice = styled.div`
  flex: 0 10%;
`;

export const CheckoutItemQuantity = styled.div`
  ${Center}
  justify-content: space-around;
  flex: 0 10%;
`;

export const CheckoutItemTotalPrice = styled.div`
  flex: 0 10%;
`;

export const CheckoutItemClear = styled.div`
  flex: 0 5%;
  margin-right: 1rem;
`;

export const CheckoutItemBtn = styled.button`
  ${BtnStyles}

  &:first-child {
    transform: rotateZ(-90deg);
  }

  &:last-child {
    transform: rotateZ(90deg);
  }
`;

export const CancelBtn = styled(Cancel)`
  width: 2rem;
  height: 2rem;
  transition: transform 0.2s linear;

  &:hover {
    fill: red;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
