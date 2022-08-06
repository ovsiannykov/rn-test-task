import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import LogoutIcon from '../../assets/icons/logout.svg';

const ExitButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 16 }}>
      <LogoutIcon width={24} height={24} stroke="black" />
    </TouchableOpacity>
  );
};

export default ExitButton;
