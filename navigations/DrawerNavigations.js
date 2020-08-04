import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import rootRoutes from '../constants/Routes';
import {FoodsStackNavigation} from './StackNavigations';
import LogoutScreen from '../screens/LogoutScreen';

const Drawer = createDrawerNavigator();

export const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={rootRoutes.mainDrawer.foods}
        component={FoodsStackNavigation}
        options={{
          title: '맛집찾아줘',
        }}
      />
      <Drawer.Screen
        name={rootRoutes.mainDrawer.logout}
        component={LogoutScreen}
        options={{
          title: '로그아웃',
        }}
      />
    </Drawer.Navigator>
  );
};
