import { createSlice } from "@reduxjs/toolkit";
import { getOrderAction, getSingleOrder } from "../action/orderAction";

const initialState: any = {
  loading: false,
  error: null,
  orders: [],
  order: {},
  shippingAddress: {},
  payment: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addShippingAddress(state, { payload }: any) {
      state.shippingAddress = payload;
    },
  },
  extraReducers: (builder) => {
    //getorder
    builder.addCase(getOrderAction.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getOrderAction.fulfilled,
      (state: any, { payload }: any) => {
        state.loading = false;
        state.error = null;
        state.orders = payload;
      }
    );

    builder.addCase(getOrderAction.rejected, (state: any, { payload }: any) => {
      state.loading = false;
      state.error = payload;
    });

    // single order
    builder.addCase(getSingleOrder.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getSingleOrder.fulfilled,
      (state: any, { payload }: any) => {
        state.loading = false;
        state.error = null;
        state.order = payload;
      }
    );

    builder.addCase(getSingleOrder.rejected, (state: any, { payload }: any) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { addShippingAddress } = orderSlice.actions;

export default orderSlice.reducer;
