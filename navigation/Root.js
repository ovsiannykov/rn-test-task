import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './auth-navigation/auth-navigation';

const Root = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default Root;
