import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilityFunctions/utilityFunctions';

initalState = {
    token: null,
    userID: null,
    loading: false,
    error: null,
    errorReg: null,
};
const authReducer = (state = initalState, actions) => {
    switch (actions.type) {
        case (actionTypes.REGISTER_USER_START): return updateObject(state, { loading: true, errorReg: null})
        case (actionTypes.REGISTER_USER_SUCCESS): {
            return updateObject(state, {
                loading: false,
                userID: actions.userID,
            });
        }
        case (actionTypes.REGISTER_USER_FAIL): return updateObject(state, { loading: false, errorReg: actions.error })

        case (actionTypes.LOGIN_USER_START): return updateObject(state, { loading: true })
        case (actionTypes.LOGIN_USER_SUCCESS): {
            return updateObject(state, {
                loading: false,
                token: actions.token,
                userID: actions.userID
            });
        }
        case (actionTypes.LOGIN_USER_FAIL): return updateObject(state, { loading: false, error: actions.error })
        case (actionTypes.LOGOUT_USER): return updateObject(state, {
            token: null,
            userID: null,
        })
        default:
            return state
    };
};

export default authReducer;