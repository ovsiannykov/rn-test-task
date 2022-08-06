import React, { memo } from 'react';

import { View, Text } from 'react-native';
import styles from './login-screen.styles';

const LoginScreen = memo(() => {
  return (
    <View style={styles.screen}>
      <Text>LoginScreen</Text>
    </View>
  );
});

export default LoginScreen;
