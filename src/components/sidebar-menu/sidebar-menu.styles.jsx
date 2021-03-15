import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const SidebarMenuContainer = styled.div`
  grid-column: 1 / 2;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const LogoDesign = css`
  margin: 1rem auto;
  padding: 0.8rem;
  line-height: 1;
  transition: all 0.15s linear;
  & > * {
    height: 5rem;
    width: 5rem;
    fill: rgba(255, 255, 255, 0.5);
    display: block;
    margin: 0 auto;
    transition: all 0.15s linear;
  }

  &:hover {
    background-color: #ffd000;

    & > * {
      fill: rgba(255, 255, 255, 0.8);
    }
  }

  &:focus,
  &:active {
    transform: translateY(2px);
    background-color: #f44;
  }

`;

export const LinkContainer = styled(Link)`
  ${LogoDesign}
  border-radius: 8px;
`;

export const LogoContainer = styled(Link)`
  ${LogoDesign}
  margin: 0;
  padding: 0;
`;

export const ImageLogo = styled.img`
  width: 100%;
  height: auto;
  background-color: #ac8ed4;
  object-fit: cover;
`;


export const SignOutBtn = styled.button`
  
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #485361;
  ${LogoDesign}
  border-radius: 8px;
`;