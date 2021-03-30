import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as LogoHome } from '../../assets/home-outline.svg';
import { ReactComponent as LogoCart } from '../../assets/cart1.svg';
import { ReactComponent as LogoUser } from '../../assets/user-o.svg';
import { ReactComponent as LogoCheckout } from '../../assets/credit-card.svg';
import { ReactComponent as LogoOut } from '../../assets/switch.svg';
import { ReactComponent as LogoSettings } from '../../assets/cog.svg';
import Logo from '../../assets/logo.png';
import SettingsMenu from '../settings-menu/settings-menu.component';

import {
  SidebarMenuContainer,
  LinkContainer,
  LogoContainer,
  ImageLogo,
  SignOutBtn,
  ShopNotification,
  SettingMenu,
} from './sidebar-menu.styles';
import { selectCartCount } from '../../redux/cart/cart.selector';

const SidebarMenu = ({ cartCount }) => {
  const [isHidden, setHidden] = useState(true);
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
        <ShopNotification>{cartCount}</ShopNotification>
      </LinkContainer>
      <LinkContainer to='/checkout'>
        <LogoCheckout />
      </LinkContainer>
      <LinkContainer to='/user'>
        <LogoUser />
      </LinkContainer>
      <SignOutBtn onClick={() => console.log('Sign Out')}>
        <LogoOut />
      </SignOutBtn>
      <SignOutBtn
        className='settings-btn'
        isHidden={isHidden}
        onClick={() => (isHidden ? setHidden(false) : setHidden(true))}
      >
        <LogoSettings className='settings-logo' isHidden={isHidden} />
      </SignOutBtn>
      <SettingMenu isHidden={isHidden}>
        <SettingsMenu />
      </SettingMenu>
    </SidebarMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartCount,
});

export default connect(mapStateToProps)(SidebarMenu);
