import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RegisterInput from '../UI/Inputs/registerInput/registerInput';
import SuccessBtn from '../UI/Buttons/SuccessBtn/SuccessBtn';

const logRegForm = (props) => {
    const { 
        email, 
        password, 
        handleSubmit,
        handleChangeValue,
        title, 
        isFormValid } = props
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    {title}
                </Text>
            </View >
            <View style={styles.inputContainer}>
                <RegisterInput
                    value={email.value}
                    handleChangeValue={handleChangeValue}
                    type='email'
                    placeholder='Email'
                />
                <RegisterInput
                    value={password.value}
                    handleChangeValue={handleChangeValue}
                    type='password'
                    placeholder='Password'
                />
            </View>
            <SuccessBtn 
            handleSubmit={handleSubmit}
            disable={!isFormValid}
            btnText='Submit'/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 15
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic',
    },
    inputContainer: {
        alignContent: 'center',
        alignItems: 'center',
    },
});

export default logRegForm;