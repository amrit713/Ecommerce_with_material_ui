import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000";

export const addProductAction = createAsyncThunk(
  "product/add",
  async (form: any, { rejectWithValue }) => {
    // console.log("🚀 ~ file: productAction.ts:9 ~ form:", form);
    // for (let [key, value] of form) {
    //   console.log(`${key}: ${value}`);
    // }

    try {
      const { data } = await axios.post(`${API_URL}/api/v1/product`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteProductAction = createAsyncThunk(
  "product/delete",
  async (id: string, { rejectWithValue }) => {

    console.log(id)
    try {
       const {data} = await axios.delete(`${API_URL}/api/v1/product/${id}`, {
        withCredentials: true,
      });

      console.log(data)
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
