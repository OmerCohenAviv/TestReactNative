import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from './android/app/src/containers/Login/Login';
import Register from './android/app/src/containers/Register/Register';
import Dashboard from './android/app/src/containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Dashboard />
      </View>
    );
  };
};

export default App;
