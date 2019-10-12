import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilityFunctions/utilityFunctions';
const initalState = {
    loading: false,
    posts: null,
};


const dashboardReducer = (state = initalState, actions) => {
    console.log(actions.type)
    switch(actions.type) {
        case(actionTypes.GET_ALL_POSTS_START): {
          return updateObject(state, {loading: true})
        }
        case(actionTypes.GET_ALL_POSTS_SUCCESS): {
            return updateObject(state, {loading: false, posts: actions.posts})
        }
        case(actionTypes.GET_ALL_POSTS_FAIL): {
            return updateObject(state, {loading: false})
        }
        default:
            return state;
    };
};

export default dashboardReducer;