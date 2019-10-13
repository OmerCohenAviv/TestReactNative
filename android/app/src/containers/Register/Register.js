import React, { Component } from 'react';
import { View } from 'react-native';
import { updateObject, checkValid } from '../../utilityFunctions/utilityFunctions';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import RegForm from '../../components/LogRegForm/LogRegForm'

class Register extends Component {
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
        isFormValid: false,
        RegisterPage: true,
    };

    changeValueHandler = (event, type) => {
        const value = event
        const validCheck = checkValid(value, this.state[type].rules)
        const updatedInput = updateObject(this.state[type], { value: value, valid: validCheck })
        this.setState({ [type]: updatedInput }, () => {
            const formValid = this.state.password.valid && this.state.email.valid
            this.setState({ isFormValid: formValid })
        });
    };
    submitRegisterHandler = () => {
        const email = this.state.email.value
        const password = this.state.password.value
        const { navigation } = this.props
        if (this.state.isFormValid) {
            this.props.onRegister(email, password)
        };
    };
    switchToLoginPage = () => {
        const { navigation } = this.props
        return navigation.navigate('Login')
    }
    render() {
        const { loading, error } = this.props
        return (
            <View style={{ flex: 1 }}>
                <RegForm
                    title='Register'
                    loading={loading}
                    error={error}
                    handleChangeValue={this.changeValueHandler}
                    email={this.state.email}
                    password={this.state.password}
                    isFormValid={this.state.isFormValid}
                    handleSubmit={this.submitRegisterHandler}
                    handleSwitchLogin={this.switchToLoginPage}
                    RegisterPage={this.state.RegisterPage}
                />
            </View>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRegister: (email, password) => dispatch(actions.registerUserInit(email, password)),
        onLogin: () => dispatch(actions.loginUserInit())
    };
};
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        loading: state.auth.loading,
        error: state.auth.error
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);