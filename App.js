// App.js -> Main.js -> Profile.js

import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import MainScreen from './screens/Main';
import ProfileScreen from './screens/Profile';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';


const initialUser = { name: "Chen", salary: 0 };

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

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return newState || state;
};

export class App extends Component {
  render() {
      return (
        <AppNavigator 
          navigation={addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.nav,
          })}
        />
    );
  }
}

export const store = createStore(combineReducers({nav: navReducer, user: userReducer}));

export default class rootApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectRedux />
      </Provider>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
      nav: state.nav,
  };
}

const ConnectRedux = connect(mapStatetoProps)(App);