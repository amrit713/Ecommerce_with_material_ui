/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IconButton, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/Add";
import RemoveRoundedIcon from "@mui/icons-material/Remove";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTypedDispatch } from "../../../store/store";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
} from "../../../store/action/cartAction";

function Item(props: any) {
  const { item } = props;
  const dispatch = useTypedDispatch();

  let [totalPrice] = useState(item.price * item.quantity);

  const removeItemFromCartHandler = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const increaseQuantityHandler = (id: string) => {
    dispatch(increaseQuantity(id));
    console.log("called");
  };

  const decreaseQuantityHandler = (id: string) => {
    dispatch(decreaseQuantity(id));
    console.log("called decrease");
  };

  return (
    <div className="bg-white p-2 rounded-md box_shadow flex justify-between items-start">
      <div className="flex space-x-4 items-center">
        <div className="  relative  w-[6rem] h-[6rem] rounded-md overflow-hidden  ">
          <Image
            src={`http://localhost:4000/public/img/products/${item.image}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="">
          <Typography variant="h6" className="capitalize">
            {" "}
            {item.name}
          </Typography>
          <Typography variant="subtitle1" className="text-dark">
            {" "}
            {`Rs. ${new Intl.NumberFormat("en-NP").format(item.price)}`} x{" "}
            {item.quantity}{" "}
            <span className="text-primary-main font-semibold mx-2">
              {" "}
              {`Rs. ${new Intl.NumberFormat("en-NP").format(totalPrice)}`}
            </span>{" "}
          </Typography>
          <div className="flex space-x-2 items-center">
            <IconButton
              disabled={item.quantity <= 1 ? true : false}
              onClick={() => decreaseQuantityHandler(item.product)}
            >
              <RemoveRoundedIcon />
            </IconButton>
            <Typography variant="h6">{item.quantity}</Typography>

            <IconButton
              className=" border-primary-dark"
              onClick={() => increaseQuantityHandler(item.product)}
            >
              <AddRoundedIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <IconButton onClick={() => removeItemFromCartHandler(item.product)}>
        <CloseRoundedIcon />
      </IconButton>
    </div>
  );
}

export default Item;
