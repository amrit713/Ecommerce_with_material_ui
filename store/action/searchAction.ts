import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000";

export const searchAction = createAsyncThunk(
  "product/search",
  async (parameter: any) => {
  
    try {

     
      console.log("🚀 ~ file: searchAction.ts:13 ~ parameter:", parameter)

      let link = `${API_URL}/api/v1/product?${
        parameter.searchName ? `keyword=${parameter.searchName}` : ""
      }${parameter.category ? `&category=${parameter.category}` : ""}${
        parameter.sort ? `&sort=${parameter.sort}` : ""
      }${parameter.minPrice ? `&price[gte]=${parameter.minPrice}` : ""}
      ${parameter.maxPrice ? `&price[lte]=${parameter.maxPrice}` : ""}`;

      console.log(link);
      const { data } = await axios.get(`${link}`);
      return {
        data: data.data.products,
        category: parameter.category,
        searchName: parameter.searchName,
        minPrice:parameter.minPrice,
        maxPrice:parameter.maxPrice
      };
    } catch (error: any) {
      return error.response.data.message;
    }
  }
);

export const brandAction = createAsyncThunk(
  "brand/search",
  async (brand: "string") => {
    try {
      const { data } = await axios.get(
        `${API_URL}/api/v1/product?brand=${brand}`
      );

      return { data: data.data.products, brand };
    } catch (error: any) {
      return error.response.data.message;
    }
  }
);
