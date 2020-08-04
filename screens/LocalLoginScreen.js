import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {dismissKeyboard, nameAndPasswordValidationCheck} from '../utils/Utils';
import Colors from '../constants/Colors';
import rootRoutes from '../constants/Routes';
import axios from 'axios';
import {endpoint} from '../constants/Constants';
import Spinner from 'react-native-loading-spinner-overlay';
import {userLoginAction} from '../actions/UserActions';
import {useDispatch} from 'react-redux';

const LocalLoginScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const dispatch = useDispatch();

  const handleName = (name) => {
    setName(name);
  };

  const handlePassword = (password) => {
    setPassword(password);
  };

  const login = () => {
    setButtonDisabled(true);
    if (nameAndPasswordValidationCheck(name, password) === false) {
      setButtonDisabled(false);
      return;
    }

    setSpinner(true);
    setButtonDisabled(true);

    axios
      .post(`${endpoint}/user/login`, {
        name,
        password,
      })
      .then((res) => res.data)
      .then((data) => {
        const {token, status} = data;
        if (status === 200) {
          return dispatch(userLoginAction(token));
        } else if (status === 404) {
          // 존재하지 않는 유저
          Alert.alert(
            '존재하지 않는 유저입니다.',
            '유저명을 다시 한 번 확인해주세요.',
          );
        } else if (status === 401) {
          // 비밀번호 불일치
          Alert.alert(
            '비밀번호가 일치하지 않습니다.',
            '비밀번호를 다시 한 번 확인해주세요.',
          );
        }

        setButtonDisabled(false);
        setSpinner(false);
      })
      .catch((err) => {
        console.error(err);
        setButtonDisabled(false);
        setSpinner(false);
        Alert.alert('에러 발생', '관리자에게 문의해주세요, 010 9041 1019');
      });
  };

  const moveToNewAccountScreen = () => {
    navigation.navigate(rootRoutes.loginRoutes.newAccount);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Spinner
          visible={spinner}
          textContent={'회원가입중입니다 잠시만 기다려주세요..'}
          textStyle={styles.spinnerTextStyle}
        />
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder={'이름'}
            onChangeText={handleName}
            autoCapitalize={'none'}
            maxLength={18}
          />
          <View style={{height: 20}} />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            value={password}
            placeholder={'암구호'}
            onChangeText={handlePassword}
            maxLength={18}
            autoCapitalize={'none'}
          />
          <View style={styles.loginButton}>
            <Button
              disabled={buttonDisabled}
              onPress={login}
              color={'black'}
              title={'로그인 하기'}
            />
          </View>
          <TouchableOpacity
            onPress={moveToNewAccountScreen}
            style={styles.notYetTextContainer}>
            <Text style={styles.notYetText}>
              아직 맛집찾아줘 계정이 없으신가요?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 100,
  },
  textInput: {
    height: 50,
    maxWidth: 500,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '80%',
    padding: 7,
  },
  loginButton: {
    marginTop: 50,
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
  notYetText: {
    color: Colors.blue,
  },
  notYetTextContainer: {
    marginTop: 20,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default LocalLoginScreen;
