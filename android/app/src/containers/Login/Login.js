import React, { Component } from 'react';
import { View } from 'react-native';
import { updateObject, checkValid } from '../../utilityFunctions/utilityFunctions';
import LogForm from '../../components/LogRegForm/LogRegForm';

class Login extends Component {
  state = {
    email: {
      value: '',
      rules: {
        required: true
      },
      valid: false,
    },
    password: {
      value: '',
      rules: {
        required: true
      },
      valid: false,
    },
    isFormValid: false
  };


  changeValueHandler = (event, type) => {
    const value = event
    const validCheck = checkValid(value, this.state[type].rules)
    const updatedInput = updateObject(this.state[type], { value: value, valid: validCheck })
    this.setState({ [type]: updatedInput }, () => {
      const formValid = this.state.password.valid && this.state.email.valid
      this.setState({isFormValid: formValid})
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LogForm
          title='Login'
          email={this.state.email}
          password={this.state.password}
          isFormValid={this.state.isFormValid}
          handleChangeValue={this.changeValueHandler}
        />
      </View>
    );
  };
};


export default Login;