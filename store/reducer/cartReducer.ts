import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  SET_CART_ITEMS,
} from "../constant/cartConstant";

interface ICartState {
  cartItems: any[];
}

export const cartReducer = (
  state: ICartState = { cartItems: [] },
  action: any
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems?.find(
        (i: any) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case SET_CART_ITEMS:
      return action.payload;

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };

      //FIXME: NOT WROKING PROPERLY
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item: any) => {
          if (item.product === action.payload.itemId) {
            return { ...item, quantity: item.quantity + 1 };
          }
        }),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item: any) => {
          if (item.product === action.payload.itemId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
          }
        }),
      };

    default:
      return state;
  }
};
