import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import Root from './navigation/Root';
import NoNetworkScreen from './screens/no-network-screen/no-network-screen';
import store from './store/store';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState<boolean | null>();

  const networkHandler = async () => {
    setLoading(true);
    await NetInfo.fetch().then(state => {
      setConnected(state?.isConnected);
      setLoading(false);
    });
  };

  useEffect(() => {
    networkHandler();
  }, []);

  if (loading) {
    return (
      <View style={styles.activityScreen}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      {connected ? <Root /> : <NoNetworkScreen onPress={networkHandler} />}
    </Provider>
  );
};

const styles = StyleSheet.create({
  activityScreen: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
