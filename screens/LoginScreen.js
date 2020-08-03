import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import KakaoLoginButton from '../components/KakaoLoginButton';
import GoogleLoginButton from '../components/GoogleLoginButton';
import AppleLoginButton from '../components/AppleLoginButton';
import LocalLoginButton from '../components/LocalLoginButton';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <LocalLoginButton navigation={navigation} />
        <View style={{height: 10}} />
        <KakaoLoginButton />
        <View style={{height: 10}} />
        <GoogleLoginButton />
        <View style={{height: 10}} />
        <AppleLoginButton />
      </View>
      <View>
        <Text>Made by @신동규</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default LoginScreen;
