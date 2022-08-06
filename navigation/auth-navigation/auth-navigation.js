import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/login-screen/login-screen';
import { LOGIN_SCREEN_OPTIONS } from './auth-navigation.config';

const Stack = createStackNavigator();

const AuthNavigation = memo(() => {
  return (
    <Stack.Navigator screenOptions={LOGIN_SCREEN_OPTIONS}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
});

export default AuthNavigation;
