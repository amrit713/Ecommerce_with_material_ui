import React from "react";
import Order from "./Order";
import { Typography } from "@mui/material";
import order from "../../../../pages/orders";

function OrderList({ orders }: any) {
  return (
    <div
      style={{ maxWidth: "100%", marginTop: "2.1rem" }}
      className="space-y-6"
    >
      <div className=" hidden md:grid grid-cols-5  items-center justify-items-center  ">
        <Typography className=" font-semibold text-slate-600">
          Order#
        </Typography>
        <Typography className="font-semibold text-slate-600">Status</Typography>
        <Typography className="font-semibold text-slate-600">
          Date purchased
        </Typography>
        <Typography className="font-semibold text-slate-600 ">Total</Typography>
        <div />
      </div>

      {orders?.map((order: any) => (
        <Order
          key={order._id}
          order={{
            id: order._id,
            status: order.orderStatus,
            date: order.createdAt,
            totalPrice: order.totalPrice,
          }}
        />
      ))}
    </div>
  );
}

export default OrderList;
