import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const error = ( props ) => {
    const { error } = props
    return (
        <View style={styles.container} >
            <Text style={styles.text}>
                {error}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    text: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        backgroundColor:'red',
        padding: 8,
        borderRadius: 4,
    }
})

export default error;