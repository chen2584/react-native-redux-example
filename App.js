// App.js -> Main.js -> Profile.js

import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import MainScreen from './screens/Main';
import ProfileScreen from './screens/Profile';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';


const initialUser = { name: "Chenzz", salary: 0 };

userReducer = (state=initialUser, action) => {
  switch (action.type) {
    case "setName":
      state = {
        ...state,
        name: action.payload
      }
      break;
    case "setSalary":
      state = {
        ...state,
        salary: action.payload  
      }
  
    default:
      break;
  }
  return state;
}


const AppNavigator = StackNavigator({
  Main: {
      screen: MainScreen,
  },
  Profile: {
      screen: ProfileScreen,
  },
});

export class App extends Component {
  render() {
      return (
        <AppNavigator />
    );
  }
}

export const store = createStore(userReducer);

export default class rootApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectRedux />
      </Provider>
    );
  }
}

const ConnectRedux = connect()(App);