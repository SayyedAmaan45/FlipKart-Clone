// userSlice.js
import * as actionTypes from "../store/constants/userConstants";

const userInitialState = {
    userData: {},
    loading: false,
    error: null
};

function userReducer(state = userInitialState, action) {
    switch (action.type) {
        case actionTypes.USER_SIGNUP_REQUEST:
        case actionTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case actionTypes.USER_SIGNUP_SUCCESS:
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                loading: false,
                error: null
            };

        case actionTypes.USER_SIGNUP_FAILURE:
        case actionTypes.USER_LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case actionTypes.USER_LOGOUT:
            return {
                ...userInitialState
            };

        default:
            return state;
    }
}

export { userReducer };
