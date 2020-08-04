import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import rootRoutes from '../constants/Routes';
import LocalLoginScreen from '../screens/LocalLoginScreen';
import NewAccountScreen from '../screens/NewAccountScreen';
import FoodsScreen from '../screens/FoodsScreen';

const Stack = createStackNavigator();

export const FoodsStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={rootRoutes.foodsRoutes.foods}
        component={FoodsScreen}
        options={{
          title: '맛집찾아줘',
        }}
      />
    </Stack.Navigator>
  );
};

export const LoginStackNavigation = () => {
  return (
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
      <Stack.Screen
        name={rootRoutes.loginRoutes.newAccount}
        options={{title: '회원가입'}}
        component={NewAccountScreen}
      />
    </Stack.Navigator>
  );
};
