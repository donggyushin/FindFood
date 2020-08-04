import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Button,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  dismissKeyboard,
  nameAndPasswordValidationCheck,
  saveToken,
} from '../utils/Utils';
import axios from 'axios';
import {endpoint} from '../constants/Constants';
import {useDispatch} from 'react-redux';
import {userLoginAction} from '../actions/UserActions';
import Spinner from 'react-native-loading-spinner-overlay';

const NewAccountScreen = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    return () => {
      // clean up function
      setButtonDisabled(false);
      setSpinner(false);
      setName('');
      setPassword1('');
      setPassword2('');
    };
  }, []);

  const handleName = (text) => {
    setName(text);
  };

  const handlePassword1 = (text) => {
    setPassword1(text);
  };

  const handlePassword2 = (text) => {
    setPassword2(text);
  };

  const makeNewAccount = () => {
    setButtonDisabled(true);
    if (password1 !== password2) {
      Alert.alert('암구호가 서로 같은지 확인해주세요!');
      setButtonDisabled(false);
      return;
    }
    if (nameAndPasswordValidationCheck(name, password1) === false) {
      setButtonDisabled(false);
      return;
    }
    console.log('make new account!!');
    axios
      .post(`${endpoint}/user`, {
        name,
        password: password1,
      })
      .then((res) => res.data)
      .then(async (data) => {
        const {error, ok, status, token} = data;
        console.log('ok: ', ok);

        setSpinner(true);

        if (status === 200) {
          // 정상적으로 회원가입 완료. 이후 토큰 받고 바로 로그인
          const success = await saveToken(token);
          if (success) {
            return dispatch(userLoginAction(token));
          } else {
            Alert.alert('에러발생', '관리자에게 문의해주세요. 010-9041-1019');
            setButtonDisabled(false);
          }
        } else if (status === 202) {
          // 이미 존재하는 유저. 다른 유저명 사용 권유
          Alert.alert(
            '이미 존재하는 유저입니다.',
            '다른 유저명을 사용해주세요!',
          );
          console.error(error);
          setButtonDisabled(false);
        } else if (status === 400) {
          // 매개변수 제대로 전달하지 못함. 매개변수 확인
          Alert.alert('에러발생', '관리자에게 문의해주세요. 010-9041-1019');
          console.error(error);
          setButtonDisabled(false);
        } else if (status === 500) {
          // 서버에러
          Alert.alert('에러발생', '관리자에게 문의해주세요. 010-9041-1019');
          console.error(error);
          setButtonDisabled(false);
        }
        setSpinner(false);
        return;
      })
      .catch((err) => {
        console.error(err);
        Alert.alert('에러발생!', '관리자에게 문의해주세요. 010-9041-1019');
        setButtonDisabled(false);
        setSpinner(false);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={styles.container}>
        <Spinner
          visible={spinner}
          textContent={'회원가입중입니다 잠시만 기다려주세요..'}
          textStyle={styles.spinnerTextStyle}
        />
        <View style={styles.textInputsContainer}>
          <TextInput
            onChangeText={handleName}
            style={styles.textInput}
            value={name}
            placeholder={'이름'}
            maxLength={18}
            autoCapitalize={'none'}
          />
          <View style={{height: 20}} />
          <TextInput
            secureTextEntry={true}
            onChangeText={handlePassword1}
            style={styles.textInput}
            value={password1}
            placeholder={'암구호'}
            maxLength={18}
            autoCapitalize={'none'}
          />
          <View style={{height: 20}} />
          <TextInput
            secureTextEntry={true}
            onChangeText={handlePassword2}
            style={styles.textInput}
            value={password2}
            placeholder={'암구호 확인'}
            maxLength={18}
            autoCapitalize={'none'}
          />
          <View style={{height: 30}} />
          <View style={styles.loginButton}>
            <Button
              disabled={buttonDisabled}
              color={'black'}
              onPress={makeNewAccount}
              title={'회원가입 하기'}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInputsContainer: {
    width: '80%',
    marginTop: 100,
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 50,
    maxWidth: 500,
    padding: 7,
  },
  loginButton: {
    marginTop: 50,
    width: '100%',
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

export default NewAccountScreen;
