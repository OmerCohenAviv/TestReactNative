import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const registerInput = (props) => {
    const { placeholder, handleChangeValue, type } = props
    return (
        <TextInput
            onChangeText={(event) => handleChangeValue(event, type)}
            style={styles.textInput}
            placeholder={placeholder}
            autoCompleteType={type}
            secureTextEntry={type === 'password'}
        />
    );
};


const styles = StyleSheet.create({
    textInput: {
        textAlignVertical: 'center',
        textAlign: 'justify',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 7,
        marginBottom: 14,
        width: '75%'

    }
});


export default registerInput;
