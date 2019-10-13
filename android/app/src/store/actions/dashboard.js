import * as actionTypes from './actionTypes';
import axios from '../../axios';

const getAllPostsStart = () => {
    return { type: actionTypes.GET_ALL_POSTS_START }
};
const getAllPostsSuccess = (response) => {
    const posts = response.data.data
    return { type: actionTypes.GET_ALL_POSTS_SUCCESS, posts: posts };
};
const getAllPostsFail = (error) => {
    return { type: actionTypes.GET_ALL_POSTS_FAIL, error: error };
};
export const getAllPostsInit = (token) => {
    return dispatch => {
        dispatch(getAllPostsStart())
        axios.get('/post/get-all-posts/', { header: { Authorization: token } })
            .then((posts) => dispatch(getAllPostsSuccess(posts)))
            .catch((error) => dispatch(getAllPostsFail(error)))
    };
};

const getMyPostsStart = (myUserID) => {
    return { type: actionTypes.GET_ALL_POSTS_START }
};
const getMyPostsSuccess = () => {
    return { type: actionTypes.GET_ALL_POSTS_SUCCESS }
};
const getMyPostsFail = () => {
    return { type: actionTypes.getAllPostsFail }
};
export const getMyPostsInit = () => {
    return dispatch => {
        dispatch(getMyPostsStart())
        axios.get('/post/get-posts-by-user-id/', { header: { Authorization: token } })
            .then((response) => dispatch(getMyPostsSuccess(response)))
            .catch((error) => dispatch(getMyPostsFail(error)))
    };
};


const deletePostStart = () => {
    return { type: actionTypes.DELETE_POST_START }
};
const deletePostSuccess = () => {
    return { type: actionTypes.DELETE_POST_SUCCESS }
};
const deletePostFail = () => {
    return { type: actionTypes.DELETE_POST_FAIL }
};
export const deletePostInit = (postID) => {
    return dispatch => {
        dispatch(deletePostStart())
        axios.delete('/post/delete-post-by-id/' + postID, { header: { Authorization: token } })
            .then((response) => dispatch(deletePostSuccess(response)))
            .catch((error) => dispatch(deletePostFail(error)))
    };
};



const addPostStart = () => {
    return { type: actionTypes.ADD_POST_START }
};
const addPostSuccess = () => {
    return { type: actionTypes.ADD_POST_SUCCESS }
};
const addPostFail = () => {
    return { type: actionTypes.ADD_POST_FAIL }
};
export const addPostInit = (title, image) => {
    const payload = {
        title: title,
        image_url: image
    };
    return dispatch => {
        dispatch(addPostStart())
        axios.post('/post/add-post', {
            header: { Authorization: token },
            data: { payload: payload }
        })
            .then((response) => dispatch(addPostSuccess(response)))
            .catch((error) => dispatch(addPostFail(error)))
    };
};
