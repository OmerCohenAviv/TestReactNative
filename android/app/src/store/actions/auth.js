import * as actionTypes from './actionTypes';
import axios from '../../axios'

const registerUserStart = () => {
    return { type: actionTypes.REGISTER_USER_START };
};

const registerUserSuccess = (response) => {
    const userID = response.data.data.user_id
    const token = response.data.data.token
    return {
        type: actionTypes.REGISTER_USER_SUCCESS,
        userID: userID,
        token: token
    }
};

const registerUserFail = (error) => {
    return {
        type: actionTypes.REGISTER_USER_FAIL,
        error: error.response.data.message
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

const loginUserSuccess = (response) => {
    const userID = response.data.data.user_id
    const token = response.data.data.token
    return {
        type: actionTypes.LOGIN_USER_SUCCESS,
        userID: userID,
        token: token
    };
};

const loginUserFail = (error) => {
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
            .then((response) => dispatch(loginUserSuccess(response)))
            .catch((error) => dispatch(loginUserFail(error)))
    };
};


export const logoutUser = () => {
    return { type: actionTypes.LOGOUT_USER }
        ;
}