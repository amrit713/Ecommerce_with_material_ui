import React, { ChangeEvent, useState, Dispatch } from "react";
import { Typography, Button, Divider } from "@mui/material";
import Description from "./Description";
import Reviews from "./Reviews";
import Product from "../home/product/Product";
import { motion } from "framer-motion";
import { IProduct } from "../../interface/IProduct";
interface IProps{
  description:string;
  relatedProducts: IProduct[];
  product:IProduct
}

function DescriptionReview({description, relatedProducts, product}:IProps) {
  const [toggle, setToggle] = useState(true);
  

  return (
    <div className="mt-8">
      <div className=" flex space-x-8">
        <Button
          className={` ${toggle ? "underline" : "text-dark"} font-semibold capitalize`}
          onClick={(e) => setToggle(true)}
        >
          Description{" "}
        </Button>
        <Button
          className={`  ${toggle ? "text-dark" : "underline"} font-semibold capitalize`}
          onClick={(e) => setToggle(false)}
        >
          Review ({product?.ratingsQuantity})
        </Button>
      </div>

      {/* <div className="w-full border-solid border border-gray-300 " /> */}
      <Divider orientation="horizontal" sx={{ borderStyle: "dashed" }} />

      <Description toggle={toggle} description={description} />

      <Reviews toggle={toggle} product={product} />
      <motion.div
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <Typography variant="h6" className="font-semibold mt-8 mb-4">
          Related Product
        </Typography>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {relatedProducts?.map((product:any) => (
            <Product  key={product._id} product={product} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default DescriptionReview;
