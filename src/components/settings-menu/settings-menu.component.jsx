import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { setGlobalColor } from '../../redux/global-styles/global-styles.action';
import { selectStyleColors } from '../../redux/global-styles/global-styles.selector';

import {
  SettingsContainer,
  SettingsOne,
  SettingsTwo,
  SettingsThree,
} from './settings-menu.styles';

const SettingsMenu = ({setBgColor, colors}) => {
  return (
    <SettingsContainer>
      <SettingsOne onClick={() => setBgColor(colors[0])}/>
      <SettingsTwo onClick={() => setBgColor(colors[1])}/>
      <SettingsThree onClick={() => setBgColor(colors[2])}/>
    </SettingsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  colors: selectStyleColors
})

const mapDispatchToProps = dispatch => ({
  setBgColor: (color) => dispatch(setGlobalColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenu);
