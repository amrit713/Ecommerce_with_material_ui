import React from "react";
import Image from "next/image";
import { Button, Typography, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { motion } from "framer-motion";
import Rating from '@mui/material/Rating';

function Product() {

  const [value, setValue] = React.useState<number | null>(2);
  return (
    <motion.div
      className="bg-white min-w-[250px] rounded-md hover:box_shadow h-[360px]  overflow-hidden
    "
    >
      <div className=" relative  w-full h-[200px] hover:opacity-85 duration-200 ease-linear cursor-pointer">
        <Image
          src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=300"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="text-center px-4 ">
        <Typography variant="h5">Nike Air 1</Typography>
        <Typography variant="h6" className="font-semibold">
          Rs. 5,000
        </Typography>
        <div className="flex items-center justify-center">
          
        <Rating name="read-only" value={value} readOnly  className="text-amber-500 "/>
          <p className="text-sm font-bold text-gray-400">(12)</p>
        </div>

        <Button
          variant="outlined"
          className=" w-full font-bold border-dark text-dark hover:bg-primary-main hover:text-white duration-200 ease-linear"
        >
          Add to cart
        </Button>
      </div>
    </motion.div>
  );
}

export default Product;
