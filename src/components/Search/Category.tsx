import { TextField, Button, Typography, Divider } from "@mui/material";
import React, {  useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { searchAction } from "../../../store/action/searchAction";
// import CategoryBrand from "./CategoryBrand";
import dynamic from "next/dynamic";

const CategoryBrand = dynamic(() => import('./CategoryBrand'), { ssr: false })

type AppProps = {
  value: number;
};

function Rate(props: AppProps): JSX.Element {
  return (
    <div>
      <Rating
        value={props.value}
        name="read-only"
        readOnly
        className="text-amber-500"
      />
    </div>
  );
}

function Category({ category }: { category: string }) {
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const dispatch = useTypedDispatch();

  const categoryHandler = (e: any) => {
    dispatch(
      searchAction({
        category: e.target.innerText.toLowerCase(),
        minPrice,
        maxPrice,
      })
    );
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    dispatch(searchAction({ minPrice, maxPrice }));
    setMinPrice(null);
    setMaxPrice(null);
  };

  const handleKeyPress = (e: any) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      submitHandler(e);
    }
  };

  return (
    <div className=" md:w-[25%] bg-white md:max-h-[85vh] p-4 ">
      <div className="space-y-2 mb-4">
        <Typography className="font-medium">Categories</Typography>
        <div className="text-sm text-gray-500 space-y-1 ">
          <Typography
            className={`cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm duration-300 hover:text-primary-main hover:scale-105 ${
              category === "sneaker"
                ? "bg-gray-100 text-primary-main scale-105"
                : ""
            }`}
            onClick={categoryHandler}
          >
            Sneaker
          </Typography>
          <Typography
            className={`cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm duration-300 hover:text-primary-main hover:scale-105 ${
              category === "running"
                ? "bg-gray-100 text-primary-main scale-105"
                : ""
            }`}
            onClick={categoryHandler}
          >
            Running{" "}
          </Typography>
          <Typography
            className={`cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm duration-300 hover:text-primary-main hover:scale-105 ${
              category === "basketball"
                ? "bg-gray-100 text-primary-main scale-105"
                : ""
            }`}
            onClick={categoryHandler}
          >
            Basketball
          </Typography>
          <Typography
            className={`cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm duration-300 hover:text-primary-main hover:scale-105 ${
              category === "casual"
                ? "bg-gray-100 text-primary-main scale-105"
                : ""
            }`}
            onClick={categoryHandler}
          >
            Casual
          </Typography>
         
          <Typography
            className={`cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm duration-300 hover:text-primary-main hover:scale-105 ${
              category === "sport"
                ? "bg-gray-100 text-primary-main scale-105"
                : ""
            }`}
            onClick={categoryHandler}
          >
            Sport
          </Typography>
        </div>
      </div>
      <Divider orientation="horizontal" sx={{ borderStyle: "dashed" }} />

      <div className="space-y-2 my-4">
        <form action="" onSubmit={submitHandler}>
          <Typography className="font-medium">Price Range</Typography>

          <div className="flex items-center space-x-2 justify-center ">
            <TextField
              type="number"
              id="outlined-basic"
              placeholder="0"
              value={minPrice}
              size="small"
              onChange={(e: any) => setMinPrice(e.target.value)}
              onKeyPress={handleKeyPress}
            />
             <p>-</p>

            <TextField
              type="number"
              id="outlined-basic"
              placeholder="5,000"
              size="small"
              value={maxPrice}
              onChange={(e: any) => setMaxPrice(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <Button type="submit" className="hidden">
            search
          </Button>
        </form>
      </div>

      <Divider orientation="horizontal" sx={{ borderStyle: "dashed" }} />

      <div className="space-y-2 my-4">
        <Typography className="font-medium">Brands</Typography>
        {/*! brand */}
      
           <CategoryBrand />
      </div>
      <Divider orientation="horizontal" sx={{ borderStyle: "dashed" }} />
      <div className="space-y-2">
        
      </div>
    
    </div>
  );
}

export default Category;
