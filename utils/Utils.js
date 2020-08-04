import AsyncStorage from '@react-native-community/async-storage';
import KakaoLogins from '@react-native-seoul/kakao-login';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from '@invertase/react-native-apple-authentication';
import {Keyboard, Alert} from 'react-native';

GoogleSignin.configure({
  webClientId:
    '384750386850-cpa0es1vp9d8712real775260nre8744.apps.googleusercontent.com',
  offlineAccess: true,
  hostedDomain: '',
  forceConsentPrompt: true,
});

export const nameAndPasswordValidationCheck = (name, password) => {
  var idReg = /^[a-z]+[a-z0-9]{5,19}$/g;
  if (!idReg.test(name) || !idReg.test(password)) {
    Alert.alert(
      '이름과 암구호는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.',
    );
    return false;
  } else if (password1 !== password2) {
    Alert.alert('암구호가 서로 다릅니다. 다시 한 번 확인해주세요!');
    return false;
  } else {
    return true;
  }
};

export const dismissKeyboard = () => {
  Keyboard.dismiss();
};

export const appleLogin = async () => {
  // performs login request
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [
      AppleAuthRequestScope.EMAIL,
      AppleAuthRequestScope.FULL_NAME,
    ],
  });

  // get current authentication state for user
  const credentialState = await appleAuth.getCredentialStateForUser(
    appleAuthRequestResponse.user,
  );

  // use credentialState response to ensure the user is authenticated
  if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
    // user is authenticated
  }
};

export const googleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

export const kakaoLogin = () => {
  KakaoLogins.login()
    .then((result) => {
      console.log(JSON.stringify(result));
    })
    .catch((err) => console.error(err));
};

export const checkUserLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    return value;
  } catch (error) {
    return null;
  }
};
