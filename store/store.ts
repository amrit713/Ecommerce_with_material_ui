import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import cartReducer from "./slice/cartSlice";
import authReducer from "./slice/authSlice";
import searchSlice from "./slice/searchSlice";

import orderSlice from "./slice/orderSlice";
import productSlice from "./slice/productSlice";
import reviewSlice from "./slice/reviewSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    search: searchSlice,
    order: orderSlice,
    product: productSlice,
    review: reviewSlice,
  },
});

export type TypedDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
