import { Button, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {  useTypedSelector} from "../../../../store/store";

import ProductEmbla from "./ProductEmbla";
import { useSelector } from "react-redux";


function FeaturedProduct() {
  const { products } = useTypedSelector(
    (state:any) => state.products
  );
 

  const featuredProducts = products?.filter((product: any) => {
    return product.brand === "nike";
  });
  

  return (
    <div className="s-container">
      <div className="flex items-center justify-between">
        <Typography variant="h6" className="capitalize font-bold mb-4 ">
          Featured Products
        </Typography>
        <Button className="text-gray-500 font-semibold hover:text-primary-main duration-200 ease-in-out">
          View All <ArrowRightAltIcon className=" text-[24px] space-x-2 " />
        </Button>
      </div>

      <ProductEmbla products = {featuredProducts} />
    </div>
  );
}

export default FeaturedProduct;
