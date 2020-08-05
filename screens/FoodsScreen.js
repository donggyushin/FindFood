import React, {useEffect, useState} from 'react';
import {StyleSheet, Platform, Alert, SafeAreaView} from 'react-native';
import DrawerMenuButton from '../components/DrawerMenuButton';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLocationAction} from '../actions/UserLocationActions';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import {endpoint} from '../constants/Constants';
import {setAdressAction} from '../actions/AddressAction';
import {setFoodsAction} from '../actions/FoodsActions';

const FoodsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userLocation = useSelector((state) => state.UserLocationReducer);
  const address = useSelector((state) => state.AddressReducer);
  const foodsReducer = useSelector((state) => state.FoodsReducer);
  const {longitude, latitude} = userLocation;
  const {area1Name, area2Name, area3Name} = address;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      getCurrentPosition();
    }
  }, []);

  useEffect(() => {
    if (longitude !== 0 && latitude !== 0) {
      getCurrentAddress();
    }
  }, [longitude, latitude]);

  useEffect(() => {
    if (area1Name && area2Name && area3Name) {
      fetchFoods();
    }
  }, [area1Name, area2Name, area3Name]);

  useEffect(() => {
    if (foodsReducer.loading === false) {
      console.log('데이터 받아오기 성공!');
      setLoading(false);
    }
  }, [foodsReducer.loading]);

  const getCurrentAddress = () => {
    axios
      .get(`${endpoint}/address?longitude=${longitude}&latitude=${latitude}`)
      .then((res) => res.data)
      .then((data) => {
        const {area1Name, area2Name, area3Name, status, error} = data;
        if (status === 200) {
          return dispatch(setAdressAction(area1Name, area2Name, area3Name));
        } else if (status === 400) {
          // 매개변수를 제대로 전달하지 못하였을때
          console.log(error);
          Alert.alert('에러발생', '관리자에게 문의해주세요 010 9041 1019');
          return;
        } else if (status === 500) {
          // 서버 내부 에러
          console.log(error);
          Alert.alert('에러발생', '관리자에게 문의해주세요 010 9041 1019');
          return;
        }
        return;
      })
      .catch((err) => {
        console.error(err);
        Alert.alert('에러발생', err.message);
        return;
      });
  };

  const fetchFoods = () => {
    axios
      .get(
        `${endpoint}/foods?area1Name=${area1Name}&area2Name=${area2Name}&area3Name=${area3Name}`,
      )
      .then((res) => res.data)
      .then((data) => {
        const {ok, status, length, foods, error} = data;
        if (status === 200) {
          return dispatch(setFoodsAction(foods));
        } else if (status === 400) {
          console.log('400 에러발생');
          return Alert.alert(
            '에러 발생',
            '관리자에게 문의해주세요 010 9041 1019',
          );
        } else if (status === 500) {
          console.log('500 에러발생');
          return Alert.alert(
            '에러 발생',
            '관리자에게 문의해주세요 010 9041 1019',
          );
        }
        return;
      })
      .catch((err) => {
        console.error(err.message);
        return Alert.alert(
          '에러 발생',
          '관리자에게 문의해주세요 010 9041 1019',
        );
      });
  };

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
