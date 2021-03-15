import React from 'react';

import { ReactComponent as LogoHome } from '../../assets/home-outline.svg';
import { ReactComponent as LogoCart } from '../../assets/cart1.svg';
import { ReactComponent as LogoUser } from '../../assets/user-o.svg';
import { ReactComponent as LogoCheckout } from '../../assets/credit-card.svg';
import { ReactComponent as LogoOut } from '../../assets/switch.svg';
import Logo from '../../assets/logo.png';

import {
  SidebarMenuContainer,
  LinkContainer,
  LogoContainer,
  ImageLogo,
  SignOutBtn
} from './sidebar-menu.styles';

const SidebarMenu = () => {
  return (
    <SidebarMenuContainer>
      <LogoContainer to='/'>
        <ImageLogo src={Logo} alt='Logo' />
      </LogoContainer>
      <LinkContainer to='/'>
        <LogoHome />
      </LinkContainer>
      <LinkContainer to='/shop'>
        <LogoCart />
      </LinkContainer>
      <LinkContainer to='/user'>
        <LogoUser />
      </LinkContainer>
      <LinkContainer to='/checkout'>
        <LogoCheckout />
      </LinkContainer>
      <SignOutBtn  onClick={console.log("Clicked")}>
        <LogoOut />
      </SignOutBtn>
    </SidebarMenuContainer>
  );
};

export default SidebarMenu;
