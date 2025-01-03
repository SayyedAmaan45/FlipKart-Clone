import axios from "axios";
const URL = "http://localhost:8000";
import * as actionTypes from "../constants/cartConstants";

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
      const {data}=  await axios.get(`${URL}/product/${id}`); 
      dispatch({type:actionTypes.ADD_TO_CART,payload:{...data.data,quantity}});
    } catch (error) {
      dispatch({type:actionTypes.ADD_TO_CART_ERROR,payload:error.message});

    }
}

export const removeFromCart = (id) =>(dispatch)=> {
  dispatch({type:actionTypes.REMOVE_FROM_CART,payload:id});
}

