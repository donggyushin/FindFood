import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from 'react-native';
import {dismissKeyboard, nameAndPasswordValidationCheck} from '../utils/Utils';
import Colors from '../constants/Colors';
import rootRoutes from '../constants/Routes';

const LocalLoginScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

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
    console.log('Login!!!');
  };

  const moveToNewAccountScreen = () => {
    navigation.navigate(rootRoutes.loginRoutes.newAccount);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
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
});

export default LocalLoginScreen;
