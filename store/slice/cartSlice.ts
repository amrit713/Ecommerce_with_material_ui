import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { ICartItem, ICartProduct } from "../../src/interface/ICart";

import { RootState } from "../store";

const initialState: { cartItems: ICartItem[] } = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: PayloadAction<ICartItem>) => {
      const isItemExist = state.cartItems?.find(
        (item: ICartItem) => item.product.id === action.payload.product.id
      );

      if (!isItemExist) {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<ICartProduct>) => {
      state.cartItems = state.cartItems.filter(
        (item: ICartItem) => item.product.id !== action.payload.id
      );
    },
    increaseQty: (state, action: PayloadAction<ICartProduct>) => {
      const cartItem = state.cartItems.find(
        (item: ICartItem) => item.product.id === action.payload.id
      );

      if (cartItem) cartItem.qty ++;
    },
    decreaseQty: (state, action: PayloadAction<ICartProduct>) => {
      const cartItem = state.cartItems.find(
        (item: ICartItem) => item.product.id === action.payload.id
      );

      if (cartItem) cartItem.qty --;
    },
  },
});

const cartItems = (state: RootState) => state.cart.cartItems;

export const productQtyInCartSelector = createSelector(
  [cartItems, (cartItems, productId: string) => productId],
  (cartItems, productId) =>
    cartItems.find((el) => el.product.id === productId)?.qty
);

export const totalCartItemSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: ICartItem) => (total += curr.qty), 0)
);

export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, curr: ICartItem) =>
      (total += curr.qty * curr.product.price),
    0
  )
);

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;
