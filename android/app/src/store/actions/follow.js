import * as actionTypes from './actionTypes';
import axios from '../../axios';


const addFollowerStart = () => {
    return { type: actionTypes.ADD_FOLLOWER_START }
};
const addFollowerSuccess = () => {
    return { type: actionTypes.ADD_FOLLOWER_SUCCESS }
};
const addFollowerFail = () => {
    return { type: actionTypes.ADD_FOLLOWER_FAIL }
};
export const addFollowerInit = (userID) => {
    return dispatch => {
        dispatch(addFollowerStart())
        axios.post('/follower/add-follower', userID)
            .then((response) => dispatch(addFollowerSuccess(response)))
            .catch((error) => dispatch(addFollowerFail(error)))
    }
}


const getMyFollowersStart = () => {
    return { type: actionTypes.GET_MY_FOLLOWERS_START }
};
const getMyFollowersSuccess = () => {
    return { type: actionTypes.GET_MY_FOLLOWERS_SUCCESS }
};
const getMyFollowersFail = () => {
    return { type: actionTypes.GET_MY_FOLLOWERS_FAIL }
};
export const getMyFollowersInit = (userID) => {
    return dispatch => {
        dispatch(getMyFollowersStart())
        axios.get('/follower/get-my-followers', userID)
            .then((response) => dispatch(getMyFollowersSuccess(response)))
            .catch((error) => dispatch(getMyFollowersFail(error)))
    }
}


const getWhoIFollowStart = () => {
    return { type: actionTypes.GET_WHO_I_FOLLOW_START }
};
const getWhoIFollowSuccess = () => {
    return { type: actionTypes.GET_WHO_I_FOLLOW_SUCCESS }
};
const getWhoIFollowFail = () => {
    return { type: actionTypes.GET_WHO_I_FOLLOW_FAIL }
};
export const getWhoIFollowInit = (userID) => {
    return dispatch => {
        dispatch(getWhoIFollowStart())
        axios.post('/follower/add-follower', userID)
            .then((response) => dispatch(getWhoIFollowSuccess(response)))
            .catch((error) => dispatch(getWhoIFollowFail(error)))
    }
}