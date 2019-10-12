import * as actionTypes from './actionTypes';
import axios from '../../axios';

const getAllPostsStart = () => {
    return { type: actionTypes.GET_ALL_POSTS_START }
};
const getAllPostsSuccess = (response) => {
    const posts = response.data.data
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
        dispatch(getAllPostsStart())
        axios.get(
            '/post/get-all-posts/',
            {
                headers: {
                    Authorization: token
                }
            }
        )
            .then((posts) => dispatch(getAllPostsSuccess(posts)))
            .catch((error) => dispatch(getAllPostsFail(error)))
    };
};