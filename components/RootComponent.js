import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import LoadingScreen from '../screens/Loading';
import FoodsScreen from '../screens/FoodsScreen';
import {checkUserLoggedInAction} from '../actions/UserActions';
import LoginStackNavigation from '../navigations/StackNavigations';

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
    return <FoodsScreen />;
  } else {
    return <LoginStackNavigation />;
  }
};

export default RootComponent;
