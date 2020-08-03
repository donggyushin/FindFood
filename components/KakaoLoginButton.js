import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Colors from '../constants/Colors';
import {kakaoLogin} from '../utils/Utils';

const KakaoLoginButton = () => {
  return (
    <View style={styles.button}>
      <Button
        onPress={kakaoLogin}
        color={'black'}
        title={'KAKAO로 로그인하기'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.kakaoYellow,
    width: '80%',
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
  },
});

export default KakaoLoginButton;
