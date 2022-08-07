import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './no-network-screen.styels';

type NoNetworkScreenProps = {
  onPress: () => void;
};

const NoNetworkScreen: React.FC<NoNetworkScreenProps> = memo(({ onPress }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>No Network 😔</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>Check connection</Text>
      </TouchableOpacity>
    </View>
  );
});

export default NoNetworkScreen;
