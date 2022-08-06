import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HOME_SCREEN_OPTIONS } from './home-navigation.config';
import HomeScreen from '../../screens/home/home-screen/home-screen';

const Stack = createStackNavigator();

const HomeNavigation = memo(() => {
  return (
    <Stack.Navigator screenOptions={HOME_SCREEN_OPTIONS}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
});

export default HomeNavigation;
