/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import Courses from './modules/Courses/container';
import Details from './modules/Details/container';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const Tabs = createMaterialBottomTabNavigator({
  Courses: {
    screen: Courses,
  },
  Details: {
    screen: Details,
  },
}, {
  initialRouteName: 'Courses',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
  },
});

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Stack />
    </View>
  </Provider>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
