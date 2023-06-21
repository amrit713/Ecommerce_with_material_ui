import { createSlice } from "@reduxjs/toolkit";

import { addProductAction } from "../action/productAction";

const initialState = {
  loading: false,
  error: null,
  product: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //createProduct
    builder.addCase(addProductAction.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(
        addProductAction.fulfilled,
        (state: any, { payload }: any) => {
          state.loading = false;
          state.product = payload?.data;
        }
      ),
      builder.addCase(
        addProductAction.rejected,
        (state: any, { payload }: any) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export default productSlice.reducer;
