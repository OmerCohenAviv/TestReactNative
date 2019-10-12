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
        isFormValid: false
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
        if (this.state.isFormValid) {
            this.props.onRegister(email,password)
        };
    };
    render() {
        return (
            <View style={{flex: 1}}>
                <RegForm
                    title='Register'
                    handleChangeValue={this.changeValueHandler}
                    email={this.state.email}
                    password={this.state.password}
                    isFormValid={this.state.isFormValid}
                    handleSubmit={this.submitRegisterHandler}
                />
            </View>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRegister: (email, password) => dispatch( actions.registerUserInit(email, password) ),
        onLogin: () => dispatch( actions.loginUserInit() )
    }
}

export default connect(null, mapDispatchToProps)(Register);