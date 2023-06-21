import { createSlice } from "@reduxjs/toolkit";
import { postReviewAction, getReviewsAction } from "../action/reviewAction";
import { IProduct } from "../../src/interface/IProduct";
import { AnyARecord } from "dns";

interface State {
  loading: boolean;
  error: null | string;
  product: any;
}

const initialState: State = {
  loading: false,
  error: null,
  product: {},
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // get review

    builder.addCase(getReviewsAction.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getReviewsAction.fulfilled,
      (state: any, { payload }: any) => {
        state.loading = false;
        state.product = payload;
      }
    );

    builder.addCase(
      getReviewsAction.rejected,
      (state: any, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      }
    );

    //post review
    builder.addCase(postReviewAction.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(postReviewAction.fulfilled, (state: any) => {
      state.loading = false;
    });

    builder.addCase(
      postReviewAction.rejected,
      (state: any, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export default reviewSlice.reducer;
