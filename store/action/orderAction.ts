import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:4000";
export const getOrderAction = createAsyncThunk("orders/list", async () => {
  try {
    const { data } = await axios.get(`${API_URL}/api/v1/order/me`, {
      withCredentials: true,
    });

    return data.data.orders;
  } catch (error: any) {
    return error.response.data.message;
  }
});

export const getSingleOrder = createAsyncThunk("order", async (id: any) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/v1/order/${id}`, {
      withCredentials: true,
    });

    return data.data.order;
  } catch (error: any) {
    return error.response.data.message;
    
  }
});

export const postOrder = createAsyncThunk("add/order", async (order: any) => {
  try {
    console.log(order)
    const { data } = await axios.post(`${API_URL}/api/v1/order/new`, order, {
      withCredentials: true,

      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(data)
    return data.data.order;
  } catch (error: any) {
    return error.response.data.message;
  }
});
