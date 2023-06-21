import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:4000";

export const getReviewsAction = createAsyncThunk(
  "get/review",
  async (id: any, { rejectWithValue }: any) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/product/${id}`
      );
      return data.data.product;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const postReviewAction = createAsyncThunk(
  "post/review",
  async (
    { rating, review, id }: { rating: number; review: string; id: any },
    { rejectWithValue }: any
  ) => {
    try {
      await axios.post(
        `${API_URL}/api/v1/product/${id}/reviews`,
        { rating: rating, review: review },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      return "review successfully created";
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
