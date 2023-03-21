/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { Button, IconButton, Typography } from "@mui/material";

import Rating from "@mui/material/Rating";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { useRouter } from "next/router";

import { getProduct } from "../../../../store/action/productAction";
import { useTypedDispatch } from "../../../../store/store";
import { addItemToCart } from "../../../../store/action/cartAction";

interface IProps {
  product?: any;
}

function Product({ product }: IProps) {
  const router = useRouter();
  const dispatch = useTypedDispatch()

  

  const clickHandler = async (product: any) => {
    router.push(product?._id);
   

  };

  const [value, setValue] = React.useState<number | null>(2);
  return (
    <div className="group rounded-[.5rem] overflow-hidden border-solid border border-gray-200 duration-300 ease-linear min-w-[16rem] bg-white">
      <div className="m-2 relative rounded-[.25rem] h-[200px] hover:opacity-85 duration-200  ease-linear  overflow-hidden ">
        <Image
          src={`http://localhost:4000/public/img/products/${product?.images[2]}`}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 duration-300 ease-in-out bg-[#f6f6f6] "
        />

        {/* <div className="absolute bg-blue-400 top-2 right-2 px-2  text-white rounded font-semibold ">
          <Typography className="font-semibold ">Sale</Typography>
        </div> */}

        <IconButton
        onClick={()=>  dispatch(addItemToCart(product?._id))}
        className="absolute opacity-0  translate-y-14 group-hover:translate-y-0 group-hover:opacity-100 bg-primary-main hover:bg-primary-dark text-white shadow-lg shadow-primary-main/50 duration-300 ease-linear bottom-2 right-2 transition-all">
          <AddShoppingCartRoundedIcon />
        </IconButton>
      </div>

      <div className=" px-4 space-y-4 mt-6 text-gray-700">
        <Typography
          variant="subtitle1"
          className="font-semibold hover:underline cursor-pointer hover:text-gray-900 line-clamp-1"
          onClick={() => clickHandler(product)}
        >
          {product?.name}
        </Typography>

        <div className="flex justify-between items-center pb-2">
          <Rating
            name="read-only"
            value={value}
            readOnly
            className="text-amber-500 text-sm"
          />

          <Typography variant="h6" className="font-semibold">
            {`Rs. ${new Intl.NumberFormat("en-NP").format(product?.price)}`}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Product;
