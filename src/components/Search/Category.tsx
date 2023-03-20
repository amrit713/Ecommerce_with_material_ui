import { TextField, Typography } from "@mui/material";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";

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

function Category() {
  return (
    <div className=" md:w-[25%] bg-white md:max-h-[132vh] p-4 ">
      <div className="space-y-2">
        <Typography className="font-medium">Categories</Typography>
        <div className="text-sm text-gray-500 space-y-1 ">
          <Typography className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm duration-300">
            Sneakers
          </Typography>
          <Typography className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm duration-300">
            Running{" "}
          </Typography>
          <Typography className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm duration-300">
            BasketBall
          </Typography>
          <Typography className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm duration-300">
            Leather
          </Typography>
          <Typography className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm duration-300">
            Hiking Boots
          </Typography>
          <Typography className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm duration-300">
            Heels
          </Typography>
        </div>
      </div>
      <div className="border-solid border-b border border-gray-200 my-4" />

      <div className="space-y-2">
        <Typography className="font-medium">Price Range</Typography>

        <div className="flex items-center space-x-2 justify-center ">
          <TextField type="number" id="outlined-basic" placeholder="0" />

          <TextField type="number" id="outlined-basic" placeholder="5,000" />
        </div>
      </div>
      <div className="border-solid border-b border border-gray-200 my-4" />

      <div className="space-y-2">
        <Typography className="font-medium">Brands</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Nike" />
          <FormControlLabel control={<Checkbox />} label="Adidas" />
          <FormControlLabel control={<Checkbox />} label="Fila" />
          <FormControlLabel control={<Checkbox />} label="New Balance" />
          <FormControlLabel control={<Checkbox />} label="Vans" />
          <FormControlLabel control={<Checkbox />} label="Puma" />
          <div className="border-solid border-b border border-gray-200 my-4" />
          <FormControlLabel control={<Checkbox />} label="On Sale" />
          <FormControlLabel control={<Checkbox />} label="In Stock" />
          <FormControlLabel control={<Checkbox />} label="Featured" />
        </FormGroup>
      </div>
      <div className="border-solid border-b border border-gray-200 my-4" />
      <div className="space-y-2">
        <Typography className="font-medium">Ratings</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label={<Rate value={0} />} />
          <FormControlLabel control={<Checkbox />} label={<Rate value={1} />} />
          <FormControlLabel control={<Checkbox />} label={<Rate value={2} />} />
          <FormControlLabel control={<Checkbox />} label={<Rate value={3} />} />
          <FormControlLabel control={<Checkbox />} label={<Rate value={4} />} />
          <FormControlLabel control={<Checkbox />} label={<Rate value={5} />} />
        </FormGroup>
      </div>
      <div className="border-solid border-b border border-gray-200 my-4" />
    </div>
  );
}

export default Category;
