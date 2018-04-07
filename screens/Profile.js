import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

export class ProfileScreen extends Component {
    componentDidMount() {

        this.props.dispatch({ type: 'setName', payload: 'Chen Semapatzzz'})
    }

    render() {
        console.log(this.props);
        return (
            <Text>Profile Screen. My name is {this.props.user.name}</Text>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        user: state
    };
  }

export default connect(mapStatetoProps)(ProfileScreen);