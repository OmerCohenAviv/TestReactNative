import * as actionTypes from './actionTypes';
import axios from '../../axios';

const registerUserStart = () => {
    return {
        type: actionTypes.REGISTER_USER_START
    };
};
const registerUserSuccess = (params) => {
    return {
        type: actionTypes.REGISTER_USER_SUCCESS
    }
};
const registerUserFail = (error) => {
    return {
        type: actionTypes.REGISTER_USER_FAIL
    };
};
export const registerUserInit = (data) => {
    return dispatch => {
        dispatch( registerUserStart() )
        axios.post('/usr/register', data)
        .then( (response) => dispatch(registerUserSuccess(response)) )
        .catch( (error) => dispatch(registerUserFail(error)) )
    };
};


//----
const loginUserStart = () => {
    return {
        type: actionTypes.LOGIN_USER_START
    };
};
const loginUserSuccess = (params) => {
    return {
        type: actionTypes.LOGIN_USER_SUCCESS
    }
};
const loginUserFail = (error) => {
    return {
        type: actionTypes.LOGIN_USER_FAIL
    };
};
export const loginUserInit = (data) => {
    return dispatch => {
        dispatch( loginUserStart() )
        axios.post('/usr/login', data)
        .then( (response) => dispatch(loginUserSuccess(response)) )
        .catch( (error) => dispatch(loginUserFail(error)) )
    };
};