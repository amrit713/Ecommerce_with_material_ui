import { Typography } from "@mui/material";
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { TbClock } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";

function Info() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
      <div className="flex items-center justify-center space-x-4 bg-white rounded-md px-8 py-6 cursor-pointer hover:shadow-lg duration-500 ease-in-out">
        <FaShippingFast
          size={64}
          className="text-gray-700 p-3 rounded-full bg-gray-100"
        />
        <div className="">
          <Typography className="font-semibold">Fast Shipping</Typography>
          <Typography className="text-gray-500">Start from Rs. 50</Typography>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 bg-white rounded-md px-8 py-6 cursor-pointer hover:shadow-lg duration-500 ease-in-out">
        <GiReceiveMoney
          size={64}
          className="text-gray-700 p-3 rounded-full bg-gray-100"
        />
        <div className="">
          <Typography className="font-semibold">Money Guarantee</Typography>
          <Typography className="text-gray-500">7 Day Return</Typography>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 bg-white rounded-md px-8 py-6 cursor-pointer hover:shadow-lg duration-500 ease-in-out">
        <TbClock
          size={64}
          className="text-gray-700 p-3 rounded-full bg-gray-100"
        />
        <div className="">
          <Typography className="font-semibold">365 Days</Typography>
          <Typography className="text-gray-500">365 Days</Typography>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 bg-white rounded-md px-8 py-6 cursor-pointer hover:shadow-lg duration-500 ease-in-out">
        <MdOutlinePayment
          size={64}
          className="text-gray-700 p-3 rounded-full bg-gray-100"
        />
        <div className="">
          <Typography className="font-semibold">Payment</Typography>
          <Typography className="text-gray-500">Secured Payment</Typography>
        </div>
      </div>
    </div>

  );
}

export default Info;
