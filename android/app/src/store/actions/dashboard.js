import * as actionTypes from './actionTypes';
import axios from '../../axios';

const getAllPostsStart = () => {
    return { type: actionTypes.GET_ALL_POSTS_START }
};
const getAllPostsSuccess = (posts) => {
    return {
        type: actionTypes.GET_ALL_POSTS_SUCCESS,
        posts: posts
    };
};
const getAllPostsFail = (error) => {
    return {
        type: actionTypes.GET_ALL_POSTS_FAIL,
        error: error
    };
};
export const getAllPostsInit = (token) => {
    return dispatch => {
        dispatch( getAllPostsStart() )
        axios.get('/post/get-all-posts?api_key=' + token)
        .then((posts) => console.log(posts))
        .catch((error) => console.log(error))
    };
};