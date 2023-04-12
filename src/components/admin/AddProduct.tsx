import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  SiPuma,
  SiNike,
  SiAdidas,
  SiFila,
  SiReebok,
  SiNewbalance,
  SiJordan,
} from "react-icons/si";

export const brands = [
  "nike",
  "adidas",
  "newblance",
  "jordan",
  "rebook",
  "puma",
  "fila",
];

function AddProduct() {
  const [categories, setCategories] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [image, setImage] = React.useState([]);

  console.log(image);

  const handleCategory = (event: SelectChangeEvent) => {
    setCategories(event.target.value as string);
  };
  const handleBrand = (event: SelectChangeEvent) => {
    setBrand(event.target.value as string);
  };

  const fileOnChangeHandler = (e: any) => {
    if (e.target.files.length <= 3) {
      setImage(e.target.files);
    }
  };

  return (
    <div className="">
      <Typography
        variant="h6"
        className="capitalize font-semibold max-w-[80%] m-auto mb-4"
      >
        add new product
      </Typography>
      <div className="bg-white  max-w-[80%] p-[28px] m-auto ">
        <form action="" className="space-y-6">
          <div className="flex flex-col space-y-3 md:space-x-3 md:flex-row md:space-y-0">
            <TextField
              label="Product Name"
              className="w-full "
              placeholder="Product Name"
              required
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categories}
                label="Categories"
                onChange={handleCategory}
              >
                <MenuItem value={"sneaker"}>Sneaker</MenuItem>
                <MenuItem value={"running"}>Running</MenuItem>
                <MenuItem value={"sport"}>Sports</MenuItem>
                <MenuItem value={"basketball"}>Basketball</MenuItem>
                <MenuItem value={"Casual"}>Casual</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Image */}
          <div className="">
            <div className=" w-full flex flex-col items-center space-y-3 py-10 bg-gray-50 rounded-md">
              <Typography className="text-gray-500">
                {!image
                  ? "Drag & drop product image here"
                  : `${image.length} image selected`}
              </Typography>
              <Typography className="text-gray-300">
                {" "}
                ______OR________
              </Typography>

              <Button
                variant="outlined"
                className="rounded-full "
                component="label"
              >
                <input
                  type="file"
                  multiple={true}
                  onChange={fileOnChangeHandler}
                  accept="image/*"
                  hidden
                />{" "}
                Select Image
              </Button>
            </div>
          </div>

          <TextField
            multiline={true}
            rows={6}
            label="Description"
            className="w-full"
            required
            placeholder="Description"
          />

          <div className="flex flex-col space-y-3 md:space-x-3 md:flex-row md:space-y-0">
            <TextField
              label="Price"
              className="w-full "
              placeholder="Price"
              required
            />

            <TextField
              label="Stock"
              className="w-full "
              placeholder="Stock"
              required
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={brand}
                label="Brand"
                onChange={handleBrand}
              >
                {brands.map((brand: any) => (
                  <MenuItem
                    key={brand}
                    value={brand}
                    className=" text-gray-600 capitalize "
                  >
                    {" "}
                    {brand}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <Button variant="contained"> Save Product</Button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
