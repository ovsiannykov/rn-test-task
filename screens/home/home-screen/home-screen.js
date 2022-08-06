import { View, Text } from 'react-native';
import React, { memo, useState } from 'react';

import styles from './home-screen.styles';

const HomeScreen = memo(() => {
  const [loading, setLoading] = useState(false);

  const fetchingData = () => {};

  return (
    <View style={styles.screen}>
      <Text>HomeScreen</Text>
    </View>
  );
});

export default HomeScreen;
