import React, { Component } from 'react';
import { View, StatusBar, AsyncStorage } from 'react-native';
import { mainStackNavigator } from './android/app/src/components/Navigation/Stack';
import { mainStackNavigatorLogged } from './android/app/src/components/Navigation/Logged/LoggedStack';
import { createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import { getEmail, getPassword } from './android/app/src/utilityFunctions/utilityFunctions';
import * as actions from './android/app/src/store/actions/index';

let AppContainerDefault = createAppContainer(mainStackNavigator)
let AppContainerAuthenticate = createAppContainer(mainStackNavigatorLogged)
class App extends Component {
  componentDidMount() {
    if (!this.props.token && !this.props.userID) {
      getEmail().then((email) => {
        getPassword().then((password) => {
          this.props.onLogin(email,password)
        })
      })
    
      
    }
  }
  render() {
    let AppContainerVar = <AppContainerDefault />
    if (this.props.token) {
      AppContainerVar = <AppContainerAuthenticate />
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='black' barStyle="light-content" />
        {AppContainerVar}
      </View>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(actions.loginUserInit(email, password))
  }
}
const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
