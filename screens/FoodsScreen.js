import React, {useEffect} from 'react';
import {StyleSheet, Platform, Alert, SafeAreaView} from 'react-native';
import DrawerMenuButton from '../components/DrawerMenuButton';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLocationAction} from '../actions/UserLocationActions';
import Spinner from 'react-native-loading-spinner-overlay';

const FoodsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userLocation = useSelector((state) => state.UserLocationReducer);
  const {longitude, latitude, loading} = userLocation;

  useEffect(() => {
    if (Platform.OS === 'ios') {
      getCurrentPosition();
    }
  }, []);

  useEffect(() => {
    console.log('loading: ', loading);
  }, [loading]);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLong = position.coords.longitude;
        const currentLat = position.coords.latitude;
        dispatch(setUserLocationAction(currentLong, currentLat));
      },
      (error) => Alert.alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };

  const createButton = () => {
    return <DrawerMenuButton navigation={navigation} />;
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: createButton,
    });
  }, []);

  return (
    <SafeAreaView>
      <Spinner
        visible={loading}
        textContent={'근처에 있는 맛집을 찾고 있는 중이에요!'}
        textStyle={styles.spinnerTextStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default FoodsScreen;
