import axios from "axios";
import { 
    ALL_PRODUCT_FAIL, 
    ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS, 
    CLEAR_ERRORS
} from "../constants/productConstants";

// Fetching products action
export const getProduct = () => async (dispatch) => {
    try {
        // Dispatch the product request action
        dispatch({ type: ALL_PRODUCT_REQUEST });

        // Make an API call to fetch products
        const { data } = await axios.get("/api/v1/products");

        // Dispatch the success action with the fetched data
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        });

    } catch (error) {
        // Handle errors safely
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : error.message || 'Something went wrong', // Default fallback error message
        });
    }
}

// Clearing errors action
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
}
