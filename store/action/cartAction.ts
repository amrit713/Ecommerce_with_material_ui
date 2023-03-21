import axios from "axios";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  SET_CART_ITEMS,
} from "../constant/cartConstant";

const API_URL = "http://localhost:4000/api/v1/product";

export const addItemToCart = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  const product = await data.data.product;

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.images[1],
      stock: product.stock,
      quantity: 1,
    },
  });
};

export const removeItemFromCart = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`${API_URL}/${id}`);

  dispatch({
    type: REMOVE_FROM_CART,
    payload: data.data.product._id,
  });
};

export const increaseQuantity = (id: string) => (dispatch: any) => {
  dispatch({
    type: INCREASE_QUANTITY,
    payload: { id },
  });
};

export const decreaseQuantity = (id: string) => (dispatch: any) => {
  dispatch({
    type: DECREASE_QUANTITY,
    payload: { id },
  });
};
