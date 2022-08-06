import React, { memo, useEffect, useState, useCallback } from 'react';
import Snackbar from 'react-native-snackbar';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from './home-screen.styles';

const HomeScreen = memo(() => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchingData();
    setLoading(false);
  }, [fetchingData]);

  const fetchingData = useCallback(async () => {
    setLoading(true);
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => {
        snakHandler(error);
      });
    setLoading(false);
  }, [snakHandler]);

  const snakHandler = useCallback(
    title => {
      Snackbar.show({
        text: `${title}`,
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: 'Try again',
          textColor: 'gray',
          onPress: () => {
            fetchingData();
          },
        },
      });
    },
    [fetchingData],
  );

  if (loading) {
    return (
      <View style={styles.fullScreen}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return (
    <View style={styles.fullScreen}>
      <Text>HomeScreen</Text>
    </View>
  );
});

export default HomeScreen;
