import React, { memo, useContext, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from '../../screens/home/home-screen/home-screen';
import AuthContext from '../../context/authContext';
import ExitButton from '../../components/exit-button/exit-button';

const Stack = createStackNavigator();

const HomeNavigation = memo(() => {
  const { setToken } = useContext(AuthContext);

  const signOutHandler = useCallback(async () => {
    try {
      await AsyncStorage.setItem('@token', '');
      await setToken('');
    } catch (error) {
      console.log(`Error Sign Out: ${error}`);
    }
  }, [setToken]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => <ExitButton onPress={signOutHandler} />,
        }}
      />
    </Stack.Navigator>
  );
});

export default HomeNavigation;
