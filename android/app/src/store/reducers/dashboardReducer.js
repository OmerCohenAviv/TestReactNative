import * as actionTypes from '../actions/actionTypes';

const initalState = {
    loading: false,
    posts: null,
};


const dashboardReducer = (state = initalState, actions) => {
    switch(actions.type) {
        case(actionTypes.GET_ALL_POSTS_START): {
            console.log('start')
        }
        case(actionTypes.GET_ALL_POSTS_SUCCESS): {
            console.log('success')
        }
        case(actionTypes.GET_ALL_POSTS_FAIL): {
            console.log('fail')
        }
        default:
            return state;
    };
};

export default dashboardReducer;