import React from 'react';
import {
  SettingsContainer,
  SettingsOne,
  SettingsTwo,
  SettingsThree,
} from './settings-menu.styles';

const SettingsMenu = () => {
  return (
    <SettingsContainer>
      <SettingsOne />
      <SettingsTwo />
      <SettingsThree />
    </SettingsContainer>
  );
};

export default SettingsMenu;
