import * as actionTypes from './actionTypes';
import axios from '../../axios';

const getAllPostsStart = () => {
    return { type: actionTypes.GET_ALL_POSTS_START }
};
const getAllPostsSuccess = (response) => {
    const posts = response.data.data
    return {
        type: actionTypes.GET_ALL_POSTS_SUCCESS,
        posts
    };
};
const getAllPostsFail = (error) => {
    return {
        type: actionTypes.GET_ALL_POSTS_FAIL,
        error
    };
};
export const getAllPostsInit = (token) => {
    console.log(token)
    return dispatch => {
        dispatch(getAllPostsStart())
        axios.get(
            '/post/get-all-posts/',
            {
                headers: { "Authorization": token }
            })
            .then((posts) => dispatch(getAllPostsSuccess(posts)))
            .catch((error) => dispatch(getAllPostsFail(error)))
    };
};

const getMyPostsStart = () => {
    return { type: actionTypes.GET_MY_POSTS_START }
};
const getMyPostsSuccess = (myPosts) => {
    return {
        type: actionTypes.GET_MY_POSTS_SUCCESS,
        myPosts
    };
};
const getMyPostsFail = (error) => {
    return {
        type: actionTypes.GET_MY_POSTS_FAIL,
        error
    };
};
export const getMyPostsInit = (token) => {
    return dispatch => {
        dispatch(getMyPostsStart())
        axios.get('/post/get-posts-by-user-id',
            {
                header: { Authorization: token }
            })
            .then((response) => dispatch(getMyPostsSuccess(response)))
            .catch((error) => dispatch(getMyPostsFail(error)))
    };
};


const deletePostStart = () => {
    return { type: actionTypes.DELETE_POST_START }
};
const deletePostSuccess = (response) => {
    return { type: actionTypes.DELETE_POST_SUCCESS }
};
const deletePostFail = (error) => {
    return {
        type: actionTypes.DELETE_POST_FAIL,
        error
    }
};
export const deletePostInit = (postID, token) => {
    const config = {
        headers: { 'Authorization': token }
    };
    return dispatch => {
        dispatch(deletePostStart())
        axios.delete(
            '/post/delete-post-by-id/' + postID,
            config
        )
            .then((response) => dispatch(deletePostSuccess(response)))
            .catch((error) => dispatch(deletePostFail(error)))
    };
};



const addPostStart = () => {
    return { type: actionTypes.ADD_POST_START }
};

const addPostSuccess = (post) => {
    const postDataObj =  {
        ...post.data.data[0],
        is_my_post:true
    }
    return { 
        type: actionTypes.ADD_POST_SUCCESS,
        postData: postDataObj
     }
};

const addPostFail = (error) => {
    return {
        type: actionTypes.ADD_POST_FAIL,
        error
    };
};

export const addPostInit = (title, image, token) => {
    const config = {
        headers: { 'Authorization': token }
    };
    const bodyParameters = {
        title: title,
        image_url: image
    };
    return dispatch => {
        dispatch(addPostStart())
        axios.post(
            '/post/add-post',
            bodyParameters,
            config
        )
            .then((response) => dispatch(addPostSuccess(response)))
            .catch((error) => dispatch(addPostFail(error)))
    };
};


export const removeAllPosts = () => { return { type: actionTypes.REMOVE_ALL_POSTS} } 