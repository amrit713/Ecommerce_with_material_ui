import { Typography, TextField, Checkbox, Button } from "@mui/material";
import React from "react";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { useFormik } from "formik";
import { addAddress } from "../../../store/action/authAction";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/router";
import { addShippingAddress } from "../../../store/slice/orderSlice";

const initialValues = {
  state: "",
  city: "",
  postalCode: "",
  street_address: "",
  phoneNo: "",
};

function Address({ title }: any) {
  const { userInfo }: any = useTypedSelector((state) => state.auth);
  const dispatch = useTypedDispatch();
  const router = useRouter()
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,

      onSubmit: (value: any) => {
        if (title === "address") {
          dispatch(addAddress(value));
          toast.success("Address Has Been Saved");
        } else {
          // dispatch()
          console.log("🚀 ~ file: Address.tsx:36 ~ Address ~ value:", value);
          dispatch(addShippingAddress(value))
          router.push("/payment")
        }
      },
    });

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="space-y-8">
        <div className="bg-white w-full shadow-sm rounded-md p-4 ">
          <Typography className="capitalize font-semibold">{title}</Typography>

          <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 mt-6">
            <TextField
              label="State"
              InputProps={{ sx: { height: 40 } }}
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <TextField
              label="City"
              InputProps={{ sx: { height: 40 } }}
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />

            <TextField
              label="Postal Code"
              InputProps={{ sx: { height: 40 } }}
              name="postalCode"
              type="number"
              value={values.postalCode}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />

            <TextField
              label="Address"
              InputProps={{ sx: { height: 40 } }}
              name="street_address"
              value={values.street_address}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />

            <TextField
              label="Phone Number"
              InputProps={{ sx: { height: 40 } }}
              type="number"
              name="phoneNo"
              value={values.phoneNo}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          {title === "address" && (
            <Button
              variant="contained"
              className="capitalize mt-4"
              type="submit"
            >
              {" "}
              Save Address
            </Button>
          )}
        </div>
      </div>
      {title === "shipping address" && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-6 ">
          <Link href="/cart">
            <Button variant="outlined" className="capitalize">
              Back To Cart{" "}
            </Button>
          </Link>
          
            <Button variant="contained" className="capitalize" type="submit">
              {" "}
              proceed to payment
            </Button>
       
        </div>
      )}
    </form>
  );
}

export default Address;

{
  /* <div className="bg-white w-full shadow-sm rounded-md p-4 space-y-4">
<Typography variant="subtitle2">Billing Address</Typography>
<div className="flex items-center space-x-4">
  <Checkbox />
  <Typography variant="subtitle2" className="text-dark">
    {" "}
    Same as Shipping Address
  </Typography>
</div>
<div className=" grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
  <TextField label="First Name" InputProps={{ sx: { height: 40 } }}  required  />

  <TextField label="Last Name" InputProps={{ sx: { height: 40 } }}  required />

  <TextField
    label="Phone Number"
    InputProps={{ sx: { height: 40 } }}
    type="number"
    required 
  />

  <TextField
    label="Zip Code"
    InputProps={{ sx: { height: 40 } }}
    type="number"
    required 
  />

  <TextField label="Address" InputProps={{ sx: { height: 40 } }}   required />
</div>
</div> */
}
