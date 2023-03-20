import { Button, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Item from "./Item";
import { useTypedSelector } from "../../../store/store";
import { calcPrice } from "../../ExtraFunction/totalPrice";

function Cart() {
  const { cartItems } = useTypedSelector((state: any) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);

  const calcTotal = useCallback(() => {
    if (cartItems) {
      calcPrice(cartItems, setTotalPrice);
    }
  }, [cartItems]);

  useEffect(() => {
    calcTotal();
  }, [calcTotal]);

  return (
    <div className="space-y-8  md:flex md:space-x-8 md:space-y-0">
      <div className="md:w-[65%] space-y-6 ">
        {cartItems &&
          cartItems.map((item: any) => <Item key={item.product} item={item} />)}
      </div>

      <div className=" bg-white md:w-[35%] md:max-h-[49vh] border-solid border shadow-md border-gray-100 rounded-md  px-2 py-4 space-y-4 ">
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
        <TextField
          InputProps={{ sx: { height: 40 } }}
          label="Voucher"
          className="w-full"
        />

        <Button variant="outlined" className="w-full capitalize">
          Apply Voucher
        </Button>

        <div className="border-solid border rounded-sm  border-gray-100 " />
        <Typography variant="subtitle1" className="font-semibold capitalize">
          shipping estimates
        </Typography>

        <TextField
          label="State"
          InputProps={{ sx: { height: 40 } }}
          className="w-full"
        />

        <TextField
          label="Zip Code"
          InputProps={{ sx: { height: 40 } }}
          className="w-full"
        />

        <Button variant="outlined" className="w-full capitalize">
          calculate shipping{" "}
        </Button>

        <Button variant="contained" className="w-full capitalize">
          checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
