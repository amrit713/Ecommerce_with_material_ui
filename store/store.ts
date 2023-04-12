import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import cartReducer from "./slice/cartSlice";
import authReducer from "./slice/authSlice";
import searchSlice from "./slice/searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    search: searchSlice,
  },
});



export type TypedDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


