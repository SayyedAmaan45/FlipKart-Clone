import axios from "axios";
const URL = "http://localhost:8000";
import * as actionTypes from "../constants/productConstants";

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE, payload: error.message })
    }
}



export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST });

        const { data } = await axios.get(`${URL}/product/${id}`);

        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data.data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_FAILURE, payload: error.message })


    }
}