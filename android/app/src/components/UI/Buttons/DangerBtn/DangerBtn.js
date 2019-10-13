import React from 'react';
import {  TouchableOpacity, StyleSheet, Text } from 'react-native';


const dangerButton = (props) => {
    const { btnText, handleSubmit, disable } = props
    return (
        <TouchableOpacity
            onPress={handleSubmit}
            disabled={disable}
            style={disable ? styles.btnDisabled : styles.btn}
            >
            <Text style={{fontWeight:'bold', color:'white'}}>
                {btnText}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        borderRadius: 7,
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(235, 52, 64)', 
        padding: 15
    },
    btnDisabled: {
        borderRadius: 7,
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(91, 99, 96)',
        padding: 15
    }
})

export default dangerButton;