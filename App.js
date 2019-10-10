import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from './android/app/src/containers/Login/Login';
class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Login />
      </View>
    );
  };
};

export default App;
