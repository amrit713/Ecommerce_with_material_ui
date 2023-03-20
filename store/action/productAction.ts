import axios from "axios";
import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_FAIL,
  PRODUCT_SUCCESS,
} from "../constant/productConstant";


const API_URL = "http://localhost:4000/api/v1/product";

export const getProducts = () => async (dispatch:any) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    const { data } = await axios.get(API_URL);
    console.log(data)
    dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: data.data });
  } catch (error: any) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.message,
    });
  }
};

//clear error

export const clearErrors = () => async (dispatch:any) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const getProduct = (id: string) => async (dispatch:any) => {
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);

    dispatch({ type: PRODUCT_SUCCESS, payload: data.data });
  } catch (error: any) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: error.message,
    });
  }
};
