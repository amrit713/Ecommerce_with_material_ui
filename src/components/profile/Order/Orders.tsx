import React, { useEffect } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import Dashboard from "../Dashboard";
import ProfileTitle from "../ProfileTitle";
import OrderList from "./OrderList";
import { useTypedDispatch, useTypedSelector } from "../../../../store/store";
import { getOrderAction } from "../../../../store/action/orderAction";

function Orders() {

  const dispatch = useTypedDispatch()
  const {orders, error} = useTypedSelector(state => state.order)
 

  useEffect(()=>{
dispatch(getOrderAction())
  },[dispatch])
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
        
        <OrderList orders={orders} />
      </div>
    </div>
  );
}

export default Orders;
