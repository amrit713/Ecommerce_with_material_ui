import { Button, Typography } from "@mui/material";
import React from "react";
import Address from "./Address";
import Link from "next/link";
import { useTypedSelector } from "../../../store/store";
import { totalPriceSelector } from "../../../store/slice/cartSlice";
import TotalPrice from "./TotalPrice";

function Checkout() {
  const totalPrice = useTypedSelector(totalPriceSelector);
  return (
    <div className="lg:h-[42vh] flex flex-col-reverse md:flex-row md:space-x-8 md:space-y-0 md:mb-[151px]">
      <div className="md:w-[75%] space-y-6">
        <Address title="shipping address" />
        
      </div>
      <div className=" md:w-[25%] max-h-[27vh] border-solid border-2 shadow-sm border-gray-100 rounded-md bg-white p-4 space-y-4 mb-8">
        <TotalPrice />
      </div>
    </div>
  );
}

export default Checkout;
