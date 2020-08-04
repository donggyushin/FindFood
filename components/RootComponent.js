import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import LoadingScreen from '../screens/LoadingScreen';
import {checkUserLoggedInAction} from '../actions/UserActions';
import {LoginStackNavigation} from '../navigations/StackNavigations';
import {MainDrawerNavigator} from '../navigations/DrawerNavigations';

const RootComponent = () => {
  const userState = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      callCheckUserLoggedInAction();
    }, 2000);
  }, []);

  const callCheckUserLoggedInAction = () => {
    dispatch(checkUserLoggedInAction());
  };

  if (userState.loading) {
    return <LoadingScreen />;
  } else if (userState.isLoggedIn) {
    return <MainDrawerNavigator />;
  } else {
    return <LoginStackNavigation />;
  }
};

export default RootComponent;
