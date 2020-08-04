import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const DrawerMenuButton = ({navigation}) => {
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <TouchableOpacity onPress={openDrawer} style={styles.container}>
      <Image
        style={styles.drawerIcon}
        source={require('../assets/drawerMenuIcon.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerIcon: {
    width: 35,
    height: 35,
  },
  container: {
    paddingLeft: 15,
  },
});

export default DrawerMenuButton;
