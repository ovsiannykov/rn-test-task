import React, { memo, ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

import LogoutIcon from '../../assets/icons/logout.svg';
import styles from './exit-button.styles';

type ExitButtonProps = {
  onPress: () => unknown | ReactNode;
};

const ExitButton: React.FC<ExitButtonProps> = memo(({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LogoutIcon width={24} height={24} stroke="black" />
    </TouchableOpacity>
  );
});

export default ExitButton;
