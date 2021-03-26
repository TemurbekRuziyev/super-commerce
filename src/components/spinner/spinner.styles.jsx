import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
`;

export const SpinnerContainer = styled.div`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  position: relative;
  animation: anima .6s linear infinite;
  background-image: linear-gradient(45deg, transparent 40%,  rgb(0, 255, 0));

  &::before {
    position: absolute;
    content: '';
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background-color: white;
    border-radius: 50%;
    z-index: 10000;
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 50%;
    background-image: linear-gradient(45deg, transparent 40%, rgb(0, 255, 0));
    z-index: 1;
    filter: blur(5px);
  }

  @keyframes anima {
    0% {
      transform: rotate(0deg);
      filter: hue-rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }
`;
