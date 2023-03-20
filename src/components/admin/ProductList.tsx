import React from "react";
import ProductTable from "./ProductTable";
import TitleAdmin from "./TitleAdmin";



function ProductList() {
  return (
    <div>
      <div className="">
        <TitleAdmin />

        <div className="mt-8">
          <ProductTable />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
