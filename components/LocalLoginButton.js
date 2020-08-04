import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import rootRoutes from '../constants/Routes';

const LocalLoginButton = ({navigation}) => {
  const moveToLocaclLoginScreen = () => {
    navigation.navigate(rootRoutes.loginRoutes.local, {
      navigation,
    });
  };

  return (
    <View style={styles.button}>
      <Button
        onPress={moveToLocaclLoginScreen}
        color={'black'}
        title={'맛집찾아줘 로그인하기'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '79%',
    maxWidth: 500,
    height: 60,
    borderRadius: 4,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: 'white',
  },
});

export default LocalLoginButton;
