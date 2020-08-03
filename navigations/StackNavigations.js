import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import rootRoutes from '../constants/Routes';
import LocalLoginScreen from '../screens/LocalLoginScreen';

const Stack = createStackNavigator();

const LoginStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerTintColor: 'black',
        }}>
        <Stack.Screen
          name={rootRoutes.loginRoutes.home}
          component={LoginScreen}
          options={{
            title: '맛집찾아줘',
          }}
        />
        <Stack.Screen
          name={rootRoutes.loginRoutes.local}
          component={LocalLoginScreen}
          options={{
            title: '로그인',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStackNavigation;
