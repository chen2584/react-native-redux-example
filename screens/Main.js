import React ,{ Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigator, addNavigationHelpers }  from 'react-navigation';
import { connect } from 'react-redux';

import ProfileScreen from './Profile';

export default class MainScreen extends Component {

    render() {
        //console.log(this.props);
        return (
            <View style={styles.container}>
                <Button title="go to Profile Page" onPress={() => this.props.navigation.navigate("Profile")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });