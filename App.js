import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { mainStackNavigator } from './android/app/src/components/Navigation/Stack';
import { mainStackNavigatorLogged } from './android/app/src/components/Navigation/Logged/LoggedStack';
import { createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';

let AppContainerDefault = createAppContainer(mainStackNavigator)
let AppContainerAuthenticate = createAppContainer(mainStackNavigatorLogged)
class App extends Component {
  render() {
    let AppContainerVar = <AppContainerDefault />
    if (this.props.token) {
      AppContainerVar = <AppContainerAuthenticate/>
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='black' barStyle="light-content" />
        {AppContainerVar}
      </View>
    );
  };
};

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}
export default connect(mapStateToProps)(App);
