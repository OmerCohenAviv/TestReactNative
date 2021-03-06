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
  componentDidUpdate() {
    if (this.props.token !== null) {
      const { navigation } = this.props
      return navigation.navigate('Dashboard')
    }
  }
  changeValueHandler = (event, type) => {
    const value = event
    const validCheck = checkValid(value, this.state[type].rules)
    const updatedInput = updateObject(this.state[type], { value: value, valid: validCheck })
    this.setState({ [type]: updatedInput }, () => {
      const formValid = this.state.password.valid && this.state.email.valid
      this.setState({ isFormValid: formValid })
    });
  };
  submitLoginHandler = () => {
    const email = this.state.email.value
    const password = this.state.password.value
    this.props.onLogin(email, password)
  };
  render() {
    const { loading, error } = this.props
    return (
      <View style={{ flex: 1 }}>
        <LogForm
          title='Login'
          loading={loading}
          email={this.state.email}
          password={this.state.password}
          isFormValid={this.state.isFormValid}
          handleSubmit={this.submitLoginHandler}
          handleChangeValue={this.changeValueHandler}
          error={error}
        />
      </View>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(actions.loginUserInit(email, password))
  }
};
const mapStateToProps = state => {
  return {
    token: state.auth.token,
    loading: state.auth.loading,
    error: state.auth.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);