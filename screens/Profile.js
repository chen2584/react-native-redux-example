import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

export class ProfileScreen extends Component {
    componentDidMount() {

        //You can change global state by this
        this.props.navigation.dispatch({type: "setName", payload: "Chen Semapat"})
    }

    render() {
        console.log(this.props);
        return (
            <Text>Profile Screen {this.props.user.name}</Text>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        //nav: state.nav,
        user: state.user
    };
  }

export default connect(mapStatetoProps)(ProfileScreen);