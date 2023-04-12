/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Typography, Button, Rating } from "@mui/material";
import Image from "next/image";
import ProductImage from "./ProductImage";
import { EmblaOptionsType } from "embla-carousel-react";

import { IProduct } from "../../interface/IProduct";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { addToCart } from "../../../store/slice/cartSlice";
import { ICartItem } from "../../interface/ICart";
import toast from "react-hot-toast";


const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Detail({ product }: { product: IProduct }) {
  const dispatch = useTypedDispatch();
  const { cartItems } = useTypedSelector((state) => state.cart);

  const item = cartItems.find((item) => item.product.id === product.id);



  const addToCartHandler = () => {
    const cartItem: ICartItem = {
      product: {
        id: product.id,
        name: product.name,
        image: product.images[2],
        price: product.price,
      },
      qty: 1,
    };
    if(!item) toast.success("Item added to cart");
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="  sm:flex sm:space-x-6 ">
      {/* image */}
      <div className=" sm:w-[50%]">
        <ProductImage
          slides={SLIDES}
          options={OPTIONS}
          images={product?.images}
        />
      </div>
      <div className=" sm:w-[50%] space-y-3 mt-8">
        <Typography
          className={`font-semibold text-sm   px-2 py-1 w-[9rem] rounded-md text-center ${
            product?.stock >= 1
              ? " text-secondary  bg-gray-200"
              : "bg-primary-main/20 text-primary-dark"
          }`}
        >
          {product?.stock >= 1 ? "Stock Available" : "Out Of Stock"}
        </Typography>
        <Typography variant="h4" className="font-semibold capitalize">
          {" "}
          {product?.name}
        </Typography>
        <Typography variant="subtitle1" className=" text-dark capitalize">
          {" "}
          Category: {product?.category}
        </Typography>

        <div className="flex items-center space-x-2">
          <Typography variant="subtitle1" className=" text-dark">
            {" "}
            Rated:
          </Typography>
          <div className="flex items-center justify-center">
            <Rating
              name="read-only"
              value={3}
              readOnly
              className="text-amber-500 "
            />
            <Typography className="text-sm font-bold text-gray-400">
              (12)
            </Typography>
          </div>
        </div>

        <div className="">
          <Typography variant="h4" className="font-semibold text-primary-main">
            {`Rs. ${new Intl.NumberFormat("en-NP").format(product?.price)}`}
          </Typography>
        </div>

        <Button variant="contained" size="large" onClick={addToCartHandler}>
          Add To Cart
        </Button>
      
      </div>
    </div>
  );
}

export default Detail;
