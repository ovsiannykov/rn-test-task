import React, { memo, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from './home-screen.styles';

const HomeScreen = memo(() => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchingData();
    setLoading(false);
  }, []);

  const fetchingData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  };

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
