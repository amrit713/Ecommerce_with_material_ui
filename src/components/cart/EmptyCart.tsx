/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

function EmptyCart() {
  return (
    <motion.div 
    initial={{opacity:0, scale:0.8}}
    animate ={{opacity:1, scale:1}}
    transition={{
      duration:"1"
    }}
    className="bg-white px-4">
      <div className="space-y-4 pt-6 ">
        <Typography
          variant="h5"
          className="font-semibold text-center capitalize "
        >
          your cart is empty
        </Typography>
        <Typography className=" text-center text-gray-700 ">
          Looks like you have not added anything in your cart
        </Typography>
      </div>
      <div className="relative h-[55vh] w-auto  overflow-hidden rounded-xl">
        <Image layout="fill" objectFit="cover" src="/empty-cart.jpg" />
      </div>
    </motion.div>
  );
}

export default EmptyCart;
