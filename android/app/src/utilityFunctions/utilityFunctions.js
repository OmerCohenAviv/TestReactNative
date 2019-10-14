import { AsyncStorage } from 'react-native'

export const updateObject = (oldObj, updatedParam) => {
    return {
        ...oldObj,
        ...updatedParam
    };
};
export const checkValid = (value, rules) => {
    let valid = true
    if (rules.required) {
        valid = value.trim() !== ''
    };
    return valid;
};

export async function getEmail() {
    return await AsyncStorage.getItem('email')
    .then((email) => email)
    .catch((error) => error)
};

export async function getPassword() {
    return await AsyncStorage.getItem('password')
    .then((password) => password)
    .catch((error) => error)
};

