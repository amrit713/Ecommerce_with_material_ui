import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import Item from "./Item";
import { useTypedSelector } from "../../../store/store";
import {
  totalCartItemSelector,
  totalPriceSelector,
} from "../../../store/slice/cartSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import EmptyCart from "./EmptyCart";
import { AnimatePresence, motion } from "framer-motion";



function Cart() {
  const cartItems = useTypedSelector((state) => state.cart.cartItems);

  const totalPrice = useTypedSelector(totalPriceSelector);
  const totalItem = useTypedSelector(totalCartItemSelector);

  return (
    <div className="">
      <Link href="/">
        <Button className="space-x-4 mb-2 ">
          <ArrowBackIcon />
          <span>Continue Shopping</span>
        </Button>
      </Link>
      <div className="space-y-8  md:flex md:space-x-8 md:space-y-0">
        <div className="md:w-[65%] space-y-6 ">
          {cartItems &&
            cartItems.map((item: any) => (
              <Item key={item.product} item={item} />
            ))}
          {cartItems.length < 1 && <EmptyCart />}
        </div>

        <div className=" bg-white md:w-[35%] md:max-h-[20vh] border-solid border shadow-md border-gray-100 rounded-md  px-2 py-4 space-y-4 ">
          <div className=" flex items-center justify-between ">
            <Typography variant="subtitle1" className="capitalize text-dark">
              items:
            </Typography>
            <Typography className="capitalize font-semibold">
              {totalItem}
            </Typography>
          </div>
          <div className=" flex items-center justify-between ">
            <Typography variant="subtitle1" className="capitalize text-dark">
              total:
            </Typography>
            <Typography className="capitalize font-semibold">
              {" "}
              {`Rs. ${new Intl.NumberFormat("en-NP").format(totalPrice)}`}
            </Typography>
          </div>
          <div className="border-solid border rounded-sm  border-gray-100 " />

          <Link href="/checkout">
            <Button variant="contained" className="w-full capitalize">
              checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
