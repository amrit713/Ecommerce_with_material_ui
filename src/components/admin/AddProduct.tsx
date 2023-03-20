import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function AddProduct() {
  const [Categories, setCategories] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value as string);
  };

  return (
    <div className="">
      <Typography variant="h6" className="capitalize font-semibold max-w-[80%] m-auto mb-4">
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
                value={Categories}
                label="Categories"
                onChange={handleChange}
              >
                <MenuItem value={10}>Sneakers</MenuItem>
                <MenuItem value={20}>Running</MenuItem>
                <MenuItem value={30}>Sports</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Image */}
          <div className="">
            <div className=" w-full flex flex-col items-center space-y-3 py-10 bg-gray-50 rounded-md">
              <Typography className="text-gray-500">
                Drag & drop product image here
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
                <input type="file" hidden /> Select Image
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
                value={Categories}
                label="Brand"
                onChange={handleChange}
              >
                <MenuItem value={10}>Nike</MenuItem>
                <MenuItem value={20}>Adidas</MenuItem>
                <MenuItem value={30}>Fila</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Button variant="contained" > Save Product</Button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
