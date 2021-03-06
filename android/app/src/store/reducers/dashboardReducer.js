import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilityFunctions/utilityFunctions';

const initalState = {
    loading: false,
    posts: null,
    error: null,
    deleted: false,
};
const dashboardReducer = (state = initalState, actions) => {
    switch (actions.type) {
        case (actionTypes.GET_ALL_POSTS_START): {
            return updateObject(state, { loading: true })
        }
        case (actionTypes.GET_ALL_POSTS_SUCCESS): {
            return updateObject(state, { loading: false, posts: actions.posts, deleted: false})
        }
        case (actionTypes.GET_ALL_POSTS_FAIL): {
            return updateObject(state, { loading: false, error: actions.error })
        }


        case (actionTypes.ADD_POST_START): {
            return updateObject(state, { loading: true })
        }
        case (actionTypes.ADD_POST_SUCCESS): {
           
            return updateObject(state, { loading: false, posts: [...state.posts, actions.postData] })
        }
        case (actionTypes.ADD_POST_FAIL): {
            return updateObject(state, { loading: false, error: actions.error })
        }


        case (actionTypes.DELETE_POST_START): {
            return updateObject(state, { loading: true })
        }
        case (actionTypes.DELETE_POST_SUCCESS): {
            return updateObject(state, { loading: false, deleted: true })
        }
        case (actionTypes.DELETE_POST_FAIL): {
            return updateObject(state, { loading: false, error: actions.error,  })
        }

        case (actionTypes.REMOVE_ALL_POSTS): {
            return updateObject(state, {posts: null})
        }

        default:
            return state;
    };
};

export default dashboardReducer;    