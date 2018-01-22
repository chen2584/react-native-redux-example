/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
  return newState || state;
};

export class App extends Component {
  render() {
      const { nav, user } = this.props;
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
      //user: state.user
  };
}

/*const mapDispatchtoProps = (dispatch) => {
  return {
      setName: (name) => {
          dispatch({
              type: "setName",
              payload: name,
          });
      },
      setSalary: (salary) => {
        dispatch({
            type: "setSalary",
            payload: salary,
        });
    }

  }
}*/

const ConnectRedux = connect(mapStatetoProps)(App);