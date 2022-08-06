import { View, Text } from 'react-native';
import React, { memo } from 'react';

import styles from './home-screen.styles';

const HomeScreen = memo(() => {
  return (
    <View style={styles.screen}>
      <Text>HomeScreen</Text>
    </View>
  );
});

export default HomeScreen;
