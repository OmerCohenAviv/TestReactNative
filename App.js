import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from './android/app/src/containers/Login/Login';
import Register from './android/app/src/containers/Register/Register'
class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Register />
      </View>
    );
  };
};

export default App;
