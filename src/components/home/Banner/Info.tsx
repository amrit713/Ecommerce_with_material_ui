import { Typography } from "@mui/material";
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { TbClock } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";

const infos = [
  {
    icon: (
      <FaShippingFast
        size={64}
        className="text-gray-700 p-3 rounded-full bg-gray-100"
      />
    ),
    title: "Fast Shipping ",
    subTitle: "Start from Rs. 50",
  },
  {
    icon: (
      <GiReceiveMoney
        size={64}
        className="text-gray-700 p-3 rounded-full bg-gray-100"
      />
    ),
    title: "Money Guarantee",
    subTitle: "7 Days Back",
  },
  {
    icon: (
      <TbClock
        size={64}
        className="text-gray-700 p-3 rounded-full bg-gray-100"
      />
    ),
    title: "365 Days ",
    subTitle: "For free return",
  },
  {
    icon: (
      <MdOutlinePayment
        size={64}
        className="text-gray-700 p-3 rounded-full bg-gray-100"
      />
    ),
    title: "Payment ",
    subTitle: "Secure system",
  },
];
function Info() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {infos.map((info) => {
        return (
          <div
            className="flex items-center justify-center space-x-4 bg-white rounded-md px-8 py-6 cursor-pointer hover:shadow-lg duration-500 ease-in-out"
            key={info.title}
          >
            {info.icon}
            <div className="">
              <Typography className="font-semibold">{info.title}</Typography>
              <Typography className="text-gray-500">{info.subTitle}</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Info;
