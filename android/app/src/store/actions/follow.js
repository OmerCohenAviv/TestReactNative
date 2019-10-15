import * as actionTypes from './actionTypes';
import axios from '../../axios';


const addFollowerStart = () => {
    return { type: actionTypes.ADD_FOLLOWER_START }
};
const addFollowerSuccess = (response) => {
    return { type: actionTypes.ADD_FOLLOWER_SUCCESS }
};
const addFollowerFail = (error) => {
    return {
        type: actionTypes.ADD_FOLLOWER_FAIL,
        error
    };
};

export const addFollowerInit = (userID, token) => {
    return dispatch => {
        dispatch(addFollowerStart())
        const config = {
            headers: { 'Authorization': token }
        };
        const bodyParameters = {
            f_user_id: userID
        }
        axios.post('/follower/add-follower',
            bodyParameters,
            config
        )
            .then((response) => dispatch(addFollowerSuccess(response)))
            .catch((error) => dispatch(addFollowerFail(error)))
    };
};



const getMyFollowersStart = () => {
    return { type: actionTypes.GET_MY_FOLLOWERS_START }
};
const getMyFollowersSuccess = (myFollowers) => {
    const myFollowersData = myFollowers.data.data
    return {
        type: actionTypes.GET_MY_FOLLOWERS_SUCCESS,
        myFollowersData
    };
};
const getMyFollowersFail = (error) => {
    return {
        type: actionTypes.GET_MY_FOLLOWERS_FAIL,
        error
    };
};
export const getMyFollowersInit = (token) => {
    return dispatch => {
        dispatch(getMyFollowersStart())
        axios.get('/follower/get-my-followers',
            {
                headers: { "Authorization": token }
            })
            .then((myFollowers) => dispatch(getMyFollowersSuccess(myFollowers)))
            .catch((error) => dispatch(getMyFollowersFail(error)))
    };
};


const getWhoIFollowStart = () => {
    return { type: actionTypes.GET_WHO_I_FOLLOW_START }
};
const getWhoIFollowSuccess = (following) => {
    const WhoIFollow = following.data.data

    return {
        type: actionTypes.GET_WHO_I_FOLLOW_SUCCESS,
        WhoIFollow
    }
};
const getWhoIFollowFail = (error) => {
    return {
        type: actionTypes.GET_WHO_I_FOLLOW_FAIL,
        error
    }
};
export const getWhoIFollowInit = (token) => {
    return dispatch => {
        dispatch(getWhoIFollowStart())
        axios.get('/follower/get-followers-by-user-id',
            {
                headers: { "Authorization": token }
            })
            .then((following) => dispatch(getWhoIFollowSuccess(following)))
    .catch((error) => dispatch(getWhoIFollowFail(error)))
    };
};