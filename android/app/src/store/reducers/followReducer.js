import * as actionsTypes from '../actions/actionTypes';
import { updateObject } from '../../utilityFunctions/utilityFunctions';

const initalState = {
    loading: false,
    followers: null,
    following: null,

};


const followReducer = (state = initalState, actions) => {
    switch (actions.type) {
        case (actionsTypes.ADD_FOLLOWER_START): return   updateObject(state, { loading: true })

        case (actionsTypes.ADD_FOLLOWER_SUCCESS): return updateObject(state, { loading: false })

        case (actionsTypes.ADD_FOLLOWER_FAIL): return    updateObject(state, { loading: false })

        case (actionsTypes.GET_MY_FOLLOWERS_START): return updateObject(state, { loading: true})
        case (actionsTypes.GET_MY_FOLLOWERS_SUCCESS): return updateObject(state, {
            loading: false,
            followers: actions.myFollowersData
        })
        case (actionsTypes.GET_MY_POSTS_FAIL): return updateObject(state, {
            loading: false,
            error: actions.error
        })
        
        default: {
            return state
        };
    }
}



export default followReducer;