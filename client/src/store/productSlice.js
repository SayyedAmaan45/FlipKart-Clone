import * as actionTypes from "../store/constants/productConstants";

function getProductReducer(state = { products: [] }, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload };
        case actionTypes.GET_PRODUCTS_FAILURE:
            return { error: action.payload };

        default:
            return state
    }

}

function getProductDetailsReducer(state = { product: {} }, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case actionTypes.GET_PRODUCTS_DETAILS_FAILURE:
            return { loading: false, error: action.payload }
        case actionTypes.GET_PRODUCTS_DETAILS_RESET:
            return { product: {} }
        default:
            return state
    }

}


export { getProductReducer, getProductDetailsReducer }
