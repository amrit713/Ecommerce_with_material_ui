import axios from "axios";
import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  SET_CART_ITEMS,
} from "../constant/cartConstant";

const API_URL = "http://localhost:4000/api/v1/product";

export const addItemToCart =
  (id: string) => async (dispatch: any, getState: any) => {
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

export const setCartItems = (items: any[]) => {
  return {
    type: SET_CART_ITEMS,
    payload: items,
  };
};

export const removeItemFromCart =
  (id: string) => async (dispatch: any, getState: any) => {
    const { data } = await axios.get(`${API_URL}/${id}`);

    dispatch({
      type: REMOVE_FROM_CART,
      payload: data.data.product._id,
    });
  };

  export const increaseQuantity = (itemId:string) =>({
    type:INCREASE_QUANTITY,
    payload :{itemId}
  })

  export const decreaseQuantity = (itemId:string) =>({
    type:INCREASE_QUANTITY,
    payload :{itemId}
  })
