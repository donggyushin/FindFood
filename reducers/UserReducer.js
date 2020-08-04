import {
  CHECK_USER_LOGGEDIN,
  USER_LOGIN,
  USER_LOGOUT,
} from '../actions/UserActions';

const initialState = {
  token: '',
  isLoggedIn: false,
  loading: true,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER_LOGGEDIN:
      return checkUserLoggedIn(state, action);
    case USER_LOGIN:
      return userLogin(state, action);
    case USER_LOGOUT:
      return userLogout(state, action);
    default:
      return state;
  }
};

const userLogout = (state, action) => {
  return {
    ...state,
    token: '',
    isLoggedIn: false,
  };
};

const userLogin = (state, action) => {
  const {token} = action;
  return {
    ...state,
    token,
    isLoggedIn: true,
  };
};

const checkUserLoggedIn = (state, action) => {
  const {token, loggedIn} = action;
  return {
    ...state,
    loading: false,
    token,
    isLoggedIn: loggedIn,
  };
};

export default UserReducer;
