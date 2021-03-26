import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/cancel-circle.svg';
export const ScaledProductContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;

  transition: all .3s ease-in-out;
`;

export const ProductContainer = styled.div`
  border-radius: 5px;
  width: 35vw;
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem;
`;

export const ProductImageContainer = styled.div`
  width: 80%;
  height: 75vh;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
`;

export const ProductPrice = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
`;

export const ExitIcon = styled(Icon)`
  position: absolute;
  width: 3rem;
  height: 3rem;
  fill: red;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;
