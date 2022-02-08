import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {routes} from './routes';
/* Screens */
import HomeScreen from '../screens/homeScreen';
import UsersListScreen from '../screens/usersListScreen';
import UserLocationScreen from '../screens/userLocationScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={routes.UsersListScreen} component={UsersListScreen} />
      <Stack.Screen
        name={routes.UserLocationScreen}
        component={UserLocationScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
