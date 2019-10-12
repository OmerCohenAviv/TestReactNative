import React, { Component } from 'react';
import { View } from 'react-native';
import { updateObject, checkValid } from '../../utilityFunctions/utilityFunctions';
import { connect } from 'react-redux';
import LogForm from '../../components/LogRegForm/LogRegForm';
import * as actions from '../../store/actions/index';

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
  submitLoginHandler = () => {
    const email = this.state.email.value
    const password = this.state.password.value
    this.props.onLogin(email, password)
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LogForm
          title='Login'
          email={this.state.email}
          password={this.state.password}
          isFormValid={this.state.isFormValid}
          handleSubmit={this.submitLoginHandler}
          handleChangeValue={this.changeValueHandler}
        />
      </View>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(actions.loginUserInit(email, password))
  }
}


export default connect(null,mapDispatchToProps)(Login);