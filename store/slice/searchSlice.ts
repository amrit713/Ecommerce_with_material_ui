import { createSlice } from "@reduxjs/toolkit";

import { IProduct } from "../../src/interface/IProduct";
import { brandAction, searchAction } from "../action/searchAction";

const initialState: {
  searchName: null | string;
  loading: boolean;
  products: IProduct[];
  category: string;
  error: null | string;
  brand: null | string;
  minPrice: null | number;
  maxPrice: null | number;
} = {
  loading: false,
  products: [],
  category: "all categories",
  error: null,
  brand: null,
  searchName: null,
  minPrice:null,
  maxPrice:null
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // category search
    builder.addCase(searchAction.pending, (state: any, { payload }: any) => {
      state.loading = true;
    });
    builder.addCase(searchAction.fulfilled, (state: any, { payload }: any) => {
      state.loading = false;
      state.products = payload.data;
      state.products = payload.data;
      state.brand = null;
      payload.minPrice
      ? (state.minPrice = payload.minPrice)
      : (state.minPrice = null);

      payload.maxPrice
      ? (state.maxPrice = payload.maxPrice)
      : (state.maxPrice = null);
      payload.searchName
        ? (state.searchName = payload.searchName)
        : (state.searchName = null);
      payload.category
        ? (state.category = payload.category)
        : (state.category = "all categories");
    });
    builder.addCase(searchAction.rejected, (state: any, { payload }: any) => {
      state.loading = false;
      state.products = payload;
    });

    //brand
    builder.addCase(brandAction.pending, (state: any, { payload }: any) => {
      state.loading = true;
    });

    builder.addCase(brandAction.fulfilled, (state: any, { payload }: any) => {
      state.loading = false;
      state.products = payload.data;
      state.brand = payload.brand;
      state.category = "all categories";
    });

    builder.addCase(brandAction.rejected, (state: any, { payload }: any) => {
      state.loading = false;
      state.products = payload;
    });
  },
});

export default searchSlice.reducer;
