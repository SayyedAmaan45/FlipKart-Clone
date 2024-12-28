import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProductReducer, getProductDetailsReducer } from "./productSlice";
import { thunk } from "redux-thunk";
import { cartReducer } from "./cartSlice";
import { userReducer } from "./userSlice";

const reducer = combineReducers({
    user: userReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer

});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;