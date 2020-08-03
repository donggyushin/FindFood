import {checkUserLoggedIn} from '../utils/Utils';
export const CHECK_USER_LOGGEDIN = 'CHECK_USER_LOGGEDIN';

export const checkUserLoggedInAction = () => async (dispatch) => {
  const token = await checkUserLoggedIn();
  const loggedIn = token === null ? false : true;

  return dispatch({
    type: CHECK_USER_LOGGEDIN,
    token,
    loggedIn,
  });
};
