import {SET_USER_LOCATION} from '../actions/UserLocationActions';

const initialState = {
  longitude: 0,
  latitude: 0,
  loading: true,
};

const UserLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOCATION:
      return setUserLocation(state, action);
    default:
      return state;
  }
};

const setUserLocation = (state, action) => {
  const {long, lat} = action;
  return {
    ...state,
    longitude: long,
    latitude: lat,
  };
};

export default UserLocationReducer;
