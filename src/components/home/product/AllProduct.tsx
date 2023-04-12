import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Product from "./Product";
import { useSelector } from "react-redux";

interface IProducts {
  products?: any[];
}

function AllProduct({ products }: { products: any[] }) {
  return (
    <div className="s-container">
      <div className="flex items-center justify-between">
        <Typography variant="h6" className="capitalize font-bold mb-4 ">
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
