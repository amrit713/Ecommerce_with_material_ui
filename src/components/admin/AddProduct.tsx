import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useFormik } from "formik";
import { useRouter } from "next/router";

import { useTypedDispatch } from "../../../store/store";
import { addProductAction } from "../../../store/action/productAction";
import toast from "react-hot-toast";
import { ContactlessOutlined } from "@mui/icons-material";

const initialValues = {
  name: "",
  category: "",
  description: "",
  brand: "",
  price: 0,
  stock: 0,
  images: [],
};

function AddProduct() {
  const dispatch = useTypedDispatch();

  const router = useRouter();

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    // validationSchema: addProductSchema,
    onSubmit: (values: any) => {
      const form = new FormData();

      for (let i = 0; i < values.images.length; i++) {
        values.images && form.append("images", values.images[i]);
      }

      values.name && form.append("name", values.name);
      values.category && form.append("category", values.category);
      values.description && form.append("description", values.description);
      values.brand && form.append("brand", values.brand);
      values.stock && form.append("stock", values.stock);
      values.price && form.append("price", values.price);

      
    

      dispatch(addProductAction(form));
      toast.success("Product Added Successfully");
      router.push("/admin/products")
    },
  });

  return (
    <div className="">
      <Typography
        variant="h6"
        className="capitalize font-semibold max-w-[100%] m-auto mb-4"
      >
        add new product
      </Typography>
      <div className="bg-white  max-w-[100%] p-[28px] m-auto ">
        <form action="" className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-3 md:space-x-3 md:flex-row md:space-y-0">
            <TextField
              label="Product Name"
              className="w-full "
              placeholder="Product Name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              required
              name="name"
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Categories"
              >
                <MenuItem value={"sneaker"}>Sneaker</MenuItem>
                <MenuItem value={"running"}>Running</MenuItem>
                <MenuItem value={"sport"}>Sports</MenuItem>
                <MenuItem value={"basketball"}>Basketball</MenuItem>
                <MenuItem value={"casual"}>Casual</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Image */}
          <div className="">
            <div className=" w-full flex flex-col items-center space-y-3 py-10 bg-gray-50 rounded-md">
              <Typography className="text-gray-500">
                {!values.images
                  ? "Drag & drop product image here"
                  : `${values.images.length} image selected`}
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
                  onChange={(event) => {
                    setFieldValue("images", event.currentTarget.files);
                  }}
                  accept="image/*"
                  name="images"
                  onBlur={handleBlur}
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
            value={values.description}
            placeholder="Description"
            name="description"
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <div className="flex flex-col space-y-3 md:space-x-3 md:flex-row md:space-y-0">
            <TextField
              label="Price"
              className="w-full "
              placeholder="Price"
              name="price"
              // value={values.price}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />

            <TextField
              label="Stock"
              className="w-full "
              placeholder="Stock"
              name="stock"
              // value={values.stock}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.brand}
                label="Brand"
                onChange={handleChange}
                name="brand"
              >
                <MenuItem value={"nike"}>Nike</MenuItem>
                <MenuItem value={"adidas"}>Adidas</MenuItem>
                <MenuItem value={"fila"}>Fila</MenuItem>
                <MenuItem value={"newbalance"}>NewBalance</MenuItem>
                <MenuItem value={"jordan"}>Jordan</MenuItem>
                <MenuItem value={"puma"}>Puma</MenuItem>
                <MenuItem value={"reebok"}>Reebok</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Button variant="contained" type="submit">
            {" "}
            Save Product
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
