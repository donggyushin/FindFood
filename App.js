/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './stores/Store';
import RootComponent from './components/RootComponent';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="dark-content" />
        <RootComponent />
      </>
    </Provider>
  );
};
export default App;
