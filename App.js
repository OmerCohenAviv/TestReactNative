import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { mainStackNavigator } from './android/app/src/components/Navigation/Stack';
import { mainStackNavigatorLogged } from './android/app/src/components/Navigation/Logged/LoggedStack';
import { createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';

let AppContainerComp = createAppContainer(mainStackNavigator)
class App extends Component {
  render() {
    AppContainerVar = <AppContainerComp />
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="lightblue" barStyle="light-content" />
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
