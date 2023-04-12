import React from "react";
import Product from "../home/product/Product";
import { Pagination } from "@mui/material";
import { IProduct } from "../../interface/IProduct";

function Products({ products }: { products: IProduct[] }) {
  return (
    <div className="md:w-[75%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {products?.length >= 12 && (
        <div className="flex justify-center mt-8">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
      )}
    </div>
  );
}

export default Products;
