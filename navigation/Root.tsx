import React, { memo, useEffect, useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import AuthNavigation from './auth-navigation/auth-navigation';
import HomeNavigation from './home-navigation/home-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../context/authContext';

const Root = memo(() => {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const tokenHandler = useCallback(async () => {
    setLoading(true);
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    tokenHandler();
  }, []);

  if (loading) {
    return (
      <View style={styles.activityScreen}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <NavigationContainer>{token ? <HomeNavigation /> : <AuthNavigation />}</NavigationContainer>
    </AuthContext.Provider>
  );
});

const styles = StyleSheet.create({
  activityScreen: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Root;
