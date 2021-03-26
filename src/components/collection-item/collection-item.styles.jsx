import styled, { css } from 'styled-components';

import { ReactComponent as Like } from '../../assets/heart.svg';
import CustomButton from '../custom-button/custom-button.component';

const Center = css`
  display: flex;
  align-items: center;
`;

export const CollectionItemContainer = styled.div`
  position: relative;
  font-family: 'Abel', 'Rubik', sans-serif;
  margin: 1rem;
  border-radius: 5px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const CollectionItemLikeContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  border: 2px solid rgba(255, 0, 0, 0.5);
  border-radius: 5px;
  ${Center};
`;

export const CollectionItemLike = styled(Like)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.2);
    fill: red;
  }

  fill: ${props => (props.liked === true ? 'red' : 'white')};
`;

export const ItemImageContainer = styled.div`
  height: 30rem;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CustomButtonStyle = styled(CustomButton)``;

export const CustomButtonContainer = styled.div`
  ${Center}
  margin-top: 1rem;
  justify-content: space-between;
  font-size: 1.5rem;
`;

export const CollectionInfoContainer = styled.div`
  ${Center}
  justify-content: space-between;
  padding: 0.2rem;
`;

export const CollectionItemName = styled.h3`
  font-size: 1.8rem;
  flex: 0 1 70%;
  display: inline-block;
`;

export const CollectionItemPrice = styled.h3`
  font-size: 1.8rem;
  display: flex;
`;
