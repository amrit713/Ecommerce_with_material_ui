import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

function OrderItem({ item }: any) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-3">
        {/* image */}
        <div className=" relative h-[5rem] w-[5rem] rounded overflow-hidden">
          <Image
            alt="image"
            layout="fill"
            objectFit="cover"
            src={`http://localhost:4000/public/img/products/${item.image}`}
          />
        </div>
        <div className="text-center">
          <Typography className="font-semibold text-slate-800">
            {item.name}
          </Typography>
          <Typography className="font-medium text-slate-400">
            {`Rs. ${new Intl.NumberFormat("en-NP").format(item.price)}`} *{" "}
            {item.quantity}{" "}
          </Typography>
        </div>
      </div>
      <Typography className="font-semibold text-primary-main">{`Rs. ${new Intl.NumberFormat(
        "en-NP"
      ).format(item.price * item.quantity)}`}</Typography>
    </div>
  );
}

export default OrderItem;
