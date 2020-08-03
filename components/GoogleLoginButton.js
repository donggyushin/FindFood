import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {googleLogin} from '../utils/Utils';

const GoogleLoginButton = () => {
  return (
    <View style={styles.button}>
      <Button
        color={'black'}
        title={'GOOGLE로 로그인하기'}
        onPress={googleLogin}
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

export default GoogleLoginButton;
