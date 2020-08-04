import React, {useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {userLogoutAction} from '../actions/UserActions';

const LogoutScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(userLogoutAction());
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.logo}>맛집찾아줘</Text>
        <Text style={styles.logoutText}>로그아웃...</Text>
      </View>
      <Text>Made by @신동규</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 180,
  },
  logoutText: {
    marginTop: 50,
  },
  viewContainer: {
    alignItems: 'center',
    flex: 1,
  },
});

export default LogoutScreen;
