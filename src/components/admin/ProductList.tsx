import React from "react";
import ProductTable from "./ProductTable";
import TitleAdmin from "./TitleAdmin";



function ProductList({products}:any) {
  return (
    <div>
      <div className="">
        <TitleAdmin />

        <div className="mt-8">
          <ProductTable products= {products} />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
