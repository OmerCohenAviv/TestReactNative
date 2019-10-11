import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilityFunctions/utilityFunctions';

initalState = {
    token: null,
    loading: false
};


 const authReducer = (state = initalState, actions) => {
    switch(actions.type) {
        case (actionTypes.REGISTER_USER_START): return updateObject( state, {loading: true} )        
        case (actionTypes.REGISTER_USER_SUCCESS): {
        }
        case (actionTypes.REGISTER_USER_FAIL): {
        }
        default:
            return state
    };
};

export default authReducer;