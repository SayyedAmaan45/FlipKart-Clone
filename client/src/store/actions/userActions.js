import axios from "axios";
const URL = "http://localhost:8000";
import * as actionTypes from "../constants/userConstants";

export const userSignUp = (data) => async (dispatch) => {
    dispatch({ type: actionTypes.USER_SIGNUP_REQUEST });
    try {
        const response = await axios.post(`${URL}/signup`, data);        
        if (response.status === 200) {
            dispatch({ type: actionTypes.USER_SIGNUP_SUCCESS, payload: response.data.data })
        }

    } catch (error) {
        dispatch({ type: actionTypes.USER_SIGNUP_FAILURE, payload: error.response?.data?.message || error.message });
    }
};

export const userLogin = (data) => async (dispatch) => {
    dispatch({ type: actionTypes.USER_LOGIN_REQUEST });
    try {
        const response = await axios.post(`${URL}/login`, data);
        console.log("Login response",response.data);

        if (response.status === 200) {
            dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: response.data.data });
        }

    } catch (error) {
        dispatch({ type: actionTypes.USER_LOGIN_FAILURE, payload: error.response?.data?.message || error.message });
    }
};

export const userLogout = () => (dispatch) => {
    dispatch({ type: actionTypes.USER_LOGOUT });
};


