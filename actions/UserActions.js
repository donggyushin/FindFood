import {checkUserLoggedIn, deleteToken} from '../utils/Utils';
export const CHECK_USER_LOGGEDIN = 'CHECK_USER_LOGGEDIN';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogoutAction = () => (dispatch) => {
  deleteToken();
  return dispatch({
    type: USER_LOGOUT,
  });
};

export const userLoginAction = (token) => (dispatch) => {
  return dispatch({
    type: USER_LOGIN,
    token,
  });
};

export const checkUserLoggedInAction = () => async (dispatch) => {
  const token = await checkUserLoggedIn();
  const loggedIn = token === null ? false : true;

  return dispatch({
    type: CHECK_USER_LOGGEDIN,
    token,
    loggedIn,
  });
};
