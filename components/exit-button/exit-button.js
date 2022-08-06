import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import LogoutIcon from '../../assets/icons/logout.svg';

const ExitButton = memo(({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 16 }}>
      <LogoutIcon width={24} height={24} stroke="black" />
    </TouchableOpacity>
  );
});

export default ExitButton;
