import { Typography } from "@mui/material";
import React from "react";

import { useTypedSelector } from "../../../store/store";
import { totalPriceSelector } from "../../../store/slice/cartSlice";

function TotalPrice() {
  const totalPrice = useTypedSelector(totalPriceSelector);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Typography variant="subtitle1" className="capitalize text-dark">
          subtotal:
        </Typography>
        <Typography className="capitalize font-semibold">
          {" "}
          {`Rs. ${new Intl.NumberFormat("en-NP").format(totalPrice)}`}
        </Typography>
      </div>

      <div className="flex items-center justify-between">
        <Typography variant="subtitle1" className="capitalize text-dark">
          shipping:
        </Typography>
        <Typography className="capitalize font-semibold">
          {" "}
          {`Rs. ${new Intl.NumberFormat("en-NP").format(
            totalPrice >= 10000 ? 0 : 200
          )}`}
        </Typography>
      </div>

      <div className="flex items-center justify-between">
        <Typography variant="subtitle1" className="capitalize text-dark">
          VAT:
        </Typography>
        <Typography className="capitalize font-semibold">
          {`Rs. ${new Intl.NumberFormat("en-NP").format(
            (totalPrice * 13) / 100
          )}`}
        </Typography>
      </div>

      <div className="flex items-center justify-between">
        <Typography variant="subtitle1" className="capitalize text-dark">
          discount:
        </Typography>
        <Typography className="capitalize font-semibold">
          {" "}
          {`Rs. ${new Intl.NumberFormat("en-NP").format(
            (totalPrice * 10) / 100
          )}`}
        </Typography>
      </div>
      <div className="border-solid border rounded-sm  border-gray-100 " />

      <Typography variant="h6" className="text-right font-semibold">
        {`Rs. ${new Intl.NumberFormat("en-NP").format(
          (totalPrice * 13) / 100 - (totalPrice * 10) / 100 + totalPrice
        )}`}
      </Typography>
    </div>
  );
}

export default TotalPrice;
