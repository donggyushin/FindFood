import {CHECK_USER_LOGGEDIN} from '../actions/UserActions';

const initialState = {
  token: '',
  isLoggedIn: false,
  loading: true,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER_LOGGEDIN:
      return checkUserLoggedIn(state, action);
    default:
      return state;
  }
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
