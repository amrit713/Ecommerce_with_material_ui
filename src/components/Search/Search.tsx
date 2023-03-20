import React from "react";
import SearchTop from "./SearchTop";
import Category from "./Category";
import Products from "./Products";

function Search() {
  return (
    <div className=" ">
      <div>
        <SearchTop />
      </div>

      <div className="md:flex md:space-x-4 mt-6 space-y-6 md:space-y-0">
       <Category />
        <Products/>
      </div>
    </div>
  );
}

export default Search;
