export const SET_USER_LOCATION = 'SET_USER_LOCATION';

export const setUserLocationAction = (long, lat) => (dispatch) => {
  return dispatch({
    type: SET_USER_LOCATION,
    long,
    lat,
  });
};
