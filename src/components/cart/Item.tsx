/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IconButton, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/Add";
import RemoveRoundedIcon from "@mui/icons-material/Remove";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTypedDispatch } from "../../../store/store";
import { ICartItem, ICartProduct } from "../../interface/ICart";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../../../store/slice/cartSlice";
import { AnimatePresence, motion } from "framer-motion";

const itemVariants = {
  hidden: {
    opacity: 0, x:-150
  },
  visible: { opacity: 1, x:0 },
  
};

interface IProps {
  item: ICartItem;
}

function Item(props: IProps) {
  const { item } = props;
  const dispatch = useTypedDispatch();
  const [show, setShow] = useState("");

  const removeItemFromCartHandler = (product: ICartProduct) => {
    dispatch(removeFromCart(product));
 setShow(product.id)
  };

  const increaseQuantityHandler = (product: ICartProduct) => {
    dispatch(increaseQty(product));

    console.log("called");
  };

  const decreaseQuantityHandler = (product: ICartProduct) => {
    dispatch(decreaseQty(product));
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={itemVariants}
       
        animate="visible"
        exit="hidden"
        transition={{
          duration:".3"
        }}
        key={show}
        className="bg-white p-2 rounded-md box_shadow flex justify-between items-start"
      >
        <div className="flex space-x-4 items-center duration-300">
          <div className="  relative  w-[6rem] h-[6rem] rounded-md overflow-hidden bg-gray-100  ">
            <Image
              src={`http://localhost:4000/public/img/products/${item.product.image}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="">
            <Typography className="capitalize text-sm sm:text-lg font-semibold">
              {" "}
              {item.product.name}
            </Typography>
            <Typography
              variant="subtitle1"
              className="text-dark text-sm sm:text-md"
            >
              {" "}
              {`Rs. ${new Intl.NumberFormat("en-NP").format(
                item.product.price
              )}`}{" "}
              x {item.qty}{" "}
              <span className="text-primary-main font-semibold mx-2">
                {" "}
                {`Rs. ${new Intl.NumberFormat("en-NP").format(
                  item.qty * item.product.price
                )}`}
              </span>{" "}
            </Typography>
            <div className="flex space-x-2 items-center ">
              <IconButton
                disabled={item.qty <= 1 ? true : false}
                onClick={() => decreaseQuantityHandler(item.product)}
              >
                <RemoveRoundedIcon />
              </IconButton>
              <Typography variant="h6">{item.qty}</Typography>

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
      </motion.div>
    </AnimatePresence>
  );
}

export default Item;
