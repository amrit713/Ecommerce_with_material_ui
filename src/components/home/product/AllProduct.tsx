import React from "react";

import { Pagination, Typography } from "@mui/material";



import Product from "./Product";

function AllProduct() {
  return (
    <div className=" w-full ">

        <Typography variant="h5" className="capitalize font-bold mb-4 ">
         All Products
        </Typography>
       
  

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="flex justify-center mt-8">
        <Pagination count={10} variant="outlined" shape="rounded"/>

      </div>

        
        </div>
  );
}

export default AllProduct;
