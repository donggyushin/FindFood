import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Button,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {dismissKeyboard, nameAndPasswordValidationCheck} from '../utils/Utils';

const NewAccountScreen = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

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
    if (nameAndPasswordValidationCheck() === false) {
      setButtonDisabled(false);
    }
    console.log('make new account!!');
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={styles.container}>
        <View style={styles.textInputsContainer}>
          <TextInput
            onChangeText={handleName}
            style={styles.textInput}
            value={name}
            placeholder={'이름'}
            maxLength={18}
          />
          <View style={{height: 20}} />
          <TextInput
            onChangeText={handlePassword1}
            style={styles.textInput}
            value={password1}
            placeholder={'암구호'}
            maxLength={18}
          />
          <View style={{height: 20}} />
          <TextInput
            onChangeText={handlePassword2}
            style={styles.textInput}
            value={password2}
            placeholder={'암구호 확인'}
            maxLength={18}
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
