import { Button, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Product from "./Product";
import { IProduct } from "../../../interface/IProduct";




function AllProduct({ products }: { products:IProduct[] }) {
  return (
    <div className="s-container">
      <div className="flex items-center justify-between mb-4">
        <Typography variant="h6" className="capitalize font-bold  ">
          All Product
        </Typography>
        <Button className="text-gray-500 font-semibold hover:text-primary-main duration-200 ease-in-out">
          View All <ArrowRightAltIcon className=" text-[24px] space-x-2 " />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <Button variant="contained" className=" ">
          Load More{" "}
        </Button>
      </div>
    </div>
  );
}

export default AllProduct;
