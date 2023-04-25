import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import Dashboard from "./Dashboard";
import ProfileTitle from "./ProfileTitle";
import OrderList from "./OrderList"

function Order() {
  return (
    <div className="flex">
      <div className=" hidden md:flex md:w-[25%]">
        <Dashboard />
      </div>

      <div className="w-full md:w-[75%]">
        <ProfileTitle
          icon={<ShoppingBagIcon className="text-[32px] text-dark" />}
          title="my orders"
        />

        <OrderList />

      </div>
    </div>
  );
}

export default Order;
