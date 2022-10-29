import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import Item from "./Item";

function Cart() {
  return (
    <div className="space-y-8 mt-24 md:flex md:space-x-8 md:space-y-0">
      <div className="md:w-[75%] space-y-6 ">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>

      <div className=" md:w-[25%] max-h-[49vh] border-solid border-2 shadow-sm border-gray-100 rounded-md bg-white px-2 py-4 space-y-4">
        <div className="flex items-center justify-between">
          <Typography variant="subtitle1" className="capitalize text-dark">
            total:
          </Typography>
          <Typography className="capitalize font-semibold">
            {" "}
            rs.40,000
          </Typography>
        </div>
        <div className="border-solid border rounded-sm  border-gray-100 " />
        <TextField
          InputProps={{ sx: { height: 40 } }}
          label="Voucher"
          className="w-full"
        />

        <Button variant="outlined" className="w-full capitalize">
          Apply Voucher
        </Button>

        <div className="border-solid border rounded-sm  border-gray-100 " />
        <Typography variant="subtitle1" className="font-semibold capitalize">
          shipping estimates
        </Typography>

        <TextField
          label="State"
          InputProps={{ sx: { height: 40 } }}
          className="w-full"
        />

        <TextField
          label="Zip Code"
          InputProps={{ sx: { height: 40 } }}
          className="w-full"
        />

        <Button variant="outlined" className="w-full capitalize">
          calculate shipping{" "}
        </Button>

        <Button variant="contained" className="w-full capitalize">
          checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
