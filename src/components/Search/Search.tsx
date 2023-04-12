import React, { useEffect } from "react";
import SearchTop from "./SearchTop";
import Category from "./Category";
import Products from "./Products";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { searchAction } from "../../../store/action/searchAction";

function Search() {
  const dispatch = useTypedDispatch();
  const { products, category } = useTypedSelector((state) => state.search);

  useEffect(() => {
    dispatch(searchAction({category:""}));
  }, [dispatch]);
  return (
    <div className=" ">
      <div>
        <SearchTop products={products} category={category} />
      </div>

      <div className="md:flex md:space-x-4 mt-6 space-y-6 md:space-y-0">
        <Category category={category} />
        <Products products={products} />
      </div>
    </div>
  );
}

export default Search;
