import React, { ChangeEvent, useState, Dispatch } from "react";
import { Typography, Button } from "@mui/material";
import Description from "./Description";
import Reviews from "./Reviews";
import Product from "../home/product/Product";
import { motion } from "framer-motion";
import { IProduct } from "../../interface/IProduct";
interface IProps{
  description:string;
  relatedProducts: IProduct[];
}

function DescriptionReview({description, relatedProducts}:IProps) {
  const [toggle, setToggle] = useState(true);
  

  return (
    <div className="mt-8">
      <div className=" flex space-x-8">
        <Button
          className={` ${toggle ? "" : "text-dark"} font-semibold`}
          onClick={(e) => setToggle(true)}
        >
          Description{" "}
        </Button>
        <Button
          className={`  ${toggle ? "text-dark" : ""} font-semibold`}
          onClick={(e) => setToggle(false)}
        >
          Review (12)
        </Button>
      </div>

      <div className="w-full border-solid border border-gray-300 " />

      <Description toggle={toggle} description={description} />

      <Reviews toggle={toggle} />
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
