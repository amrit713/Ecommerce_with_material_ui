import { Typography, TextField, Checkbox } from "@mui/material";
import React from "react";

function Address() {
  return (
    <div className="space-y-8">
      <div className="bg-white w-full shadow-sm rounded-md p-4 ">
        <Typography variant="subtitle2">Shipping Address</Typography>

        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 mt-6">
          <TextField
            label="Phone Number"
            InputProps={{ sx: { height: 40 } }}
            type="number"
            required
          />

          <TextField
            label="State"
            InputProps={{ sx: { height: 40 } }}
            required
          />

          <TextField
            label="Postal Code"
            InputProps={{ sx: { height: 40 } }}
            type="number"
            required
          />


          <TextField
            label="Address"
            InputProps={{ sx: { height: 40 } }}
            required
          />
        </div>
      </div>

      {/* <div className="bg-white w-full shadow-sm rounded-md p-4 space-y-4">
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
      </div> */}
    </div>
  );
}

export default Address;
