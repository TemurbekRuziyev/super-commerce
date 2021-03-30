import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const SidebarMenuContainer = styled.div`
  grid-column: 1 / 2;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;
`;


const LogoDesign = css`
  margin: 1rem auto;
  padding: 0.8rem;
  line-height: 1;
  transition: all 0.15s linear;
  & > * {
    height: 4rem;
    width: 4rem;
    fill: rgba(255, 255, 255, 0.5);
    display: block;
    margin: 0 auto;
    transition: all 0.15s linear;
  }

  &:hover {
    background-color: #ffad48;

    & > * {
      fill: rgba(255, 255, 255, 0.8);
    }
  }

  &:focus,
  &:active {
    transform: translateY(2px) rotate(0);
    background-color: #f44;
  }
`;

export const LinkContainer = styled(Link)`
  ${LogoDesign}
  border-radius: 8px;
  position: relative;
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

  &.settings-btn {
    background-color: #485361;
    transition: all 0.5s;
    position: relative;
    width: 100%;
  }

  &.settings-btn > .settings-logo {
    transform: ${props => (props.isHidden ? 'rotate(0)' : 'rotate(90deg)')};
  }
`;

export const ShopNotification = styled.span`
  position: absolute;
  top: 0;
  left: 65%;
  background-color: green;
  padding: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  border-radius: 50%;
`;

export const SettingMenu = styled.div`
  position: absolute;
  transition: all 0.5s;
  right: left;
  top: 47.3rem;
  width: max-content;
  transform: ${props =>
    props.isHidden ? 'translateX(-55%)' : 'translate(65%)'};
  z-index: -1;
`;
