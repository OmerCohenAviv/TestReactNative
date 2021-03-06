import * as actionTypes from './actionTypes';
import axios from '../../axios'
import AsyncStorage from '@react-native-community/async-storage'

const registerUserStart = () => {
    return { type: actionTypes.REGISTER_USER_START };
};
const registerUserSuccess = (response) => {
    const userID = response.data.data.user_id
    return {
        type: actionTypes.REGISTER_USER_SUCCESS,
        userID: userID
    }
};
const registerUserFail = (error) => {
    console.log(error.message)
    return {
        type: actionTypes.REGISTER_USER_FAIL,
        error: error.message
    };
};
export const registerUserInit = (email, password) => {
    const data = {
        email: email,
        password: password
    };
    return dispatch => {
        dispatch(registerUserStart())
        axios.post('/usr/register', data)
            .then((response) => dispatch(registerUserSuccess(response)))
            .catch((error) => dispatch(registerUserFail(error)))
    };
};



const loginUserStart = () => {
    return {
        type: actionTypes.LOGIN_USER_START
    };
};
const loginUserSuccess = (response, email, password) => {
    const userID = response.data.data.user_id
    const token = response.data.data.token
    AsyncStorage.setItem('email', email)
    AsyncStorage.setItem('password', password)
    return {
        type: actionTypes.LOGIN_USER_SUCCESS,
        userID: userID,
        token: token
    };
};
const loginUserFail = (error) => {
    console.log('fail')
    return {
        type: actionTypes.LOGIN_USER_FAIL,
        error: error.response.data.message
    };
};
export const loginUserInit = (email, password) => {
    const data = {
        email: email,
        password: password
    };
    return dispatch => {
        dispatch(loginUserStart())
        axios.post('/usr/login', data)
            .then((response) => dispatch(loginUserSuccess(response, email, password)))
            .catch((error) => dispatch(loginUserFail(error)))
    };
};


export const autoLogin = (email, password) => {
    const data = {
        email: email,
        password: password
    };
    return dispatch => {
        axios.post('/usr/login', data)
            .then((response) => dispatch(loginUserSuccess(response, email, password)))
            .catch( (error) => console.log(error))
    }
}
export const logoutUser = () => {
    AsyncStorage.removeItem('email')
    AsyncStorage.removeItem('password')
    return { type: actionTypes.LOGOUT_USER }
};