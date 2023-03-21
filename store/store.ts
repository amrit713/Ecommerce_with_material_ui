import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./reducer/cartReducer";

import {
  productDetailReducer,
  productsReducer,
} from "./reducer/productReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

const clientSide = typeof window !== "undefined";

const rootReducer = combineReducers({
  products: productsReducer,
  product: productDetailReducer,
  cart: cartReducer,
});

// test

// Configure the persist reducer to only persist the cartItems portion of the state

// cart: {
//   cartItems: clientSide
//     ? localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems") || "{}")
//       : []
//     : [],
// },
let initialState = {};

// redux-persist
const middleware = [thunk];

export const store: any = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);



export type TypedDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;


