import React from "react";

import { Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import ProductEmbla from "./ProductEmbla";
import { useSelector } from "react-redux";


function DealProduct() {
  const { products } = useSelector(
    (state: any) => state.products
  );

  const dealOfDay = products?.filter((product: any) => {
    return product.brand === "adidas";
  });
  return (
    <div className="s-container">
      <div className="flex items-center justify-between">
        <Typography variant="h6" className="capitalize font-bold mb-4 ">
          Deals of The Day
        </Typography>
        <Button className="text-gray-500 font-semibold hover:text-primary-main duration-200 ease-in-out">
          View All <ArrowRightAltIcon className=" text-[24px] space-x-2 " />
        </Button>
      </div>

      <ProductEmbla products={dealOfDay} />
    </div>
  );
}

export default DealProduct;
