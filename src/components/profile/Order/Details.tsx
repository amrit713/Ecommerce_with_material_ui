import { Typography, Divider } from "@mui/material";
import React, { useEffect } from "react";
import OrderItem from "./OrderItem";
import { useTypedDispatch, useTypedSelector } from "../../../../store/store";
import moment from "moment";
import { useRouter } from "next/router";
import { getSingleOrder } from "../../../../store/action/orderAction";

function Details() {
  const { order } = useTypedSelector((state) => state.order);
  const dispatch = useTypedDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getSingleOrder(router.query.orderDetail));
  }, [dispatch, router]);
  return (
    <div className="space-y-6">
      {/* <div className=""></div> */}
      <div className="px-6 py-4 bg-white rounded-md mt-10 space-y-4">
        <div className="flex justify-between  ">
          <Typography className="text-xs sm:text-base ">
            {" "}
            <span className="text-slate-400 font-medium">Order ID:</span>{" "}
            {order._id}
          </Typography>
          <Typography className="text-xs sm:text-base  ">
            <span className="text-slate-400 font-medium">Place On:</span>{" "}
            {moment(order.createdAt).format("MMMM Do YYYY")}
            {/* {order.createdAt} */}
          </Typography>
          {/* <Typography>
            <span className="text-slate-400 font-medium"> Delivery on: </span>{" "}
            18 june, 2023
          </Typography> */}
        </div>
        <Divider />

       {order?.orderItems.map((item:any)=>(
        <OrderItem key={item._id} item={item} />
       ))}
      </div>
      {/* shipping and summary */}
      <div className=" flex flex-col gap-6 sm:flex-row">
        <div className="w-[100%] sm:w-[50%] bg-white p-4 rounded-md">
          <Typography className="font-semibold text-lg">
            {" "}
            Shipping Address
          </Typography>

          <Typography className="text-slate-800 mt-4 ">
            {" "}
            {order.shippingInfo.state}, {order.shippingInfo.city} {order.shippingInfo.postalCode} -{order.shippingInfo.street_address} : {order.shippingInfo.phoneNo}
          </Typography>
        </div>

        <div className="w-[100%] sm:w-[50%] bg-white p-4 rounded-md space-y-2 ">
          <Typography className="font-semibold">Total Summary</Typography>

          <div className="flex justify-between items-center ">
            <Typography className="text-slate-400">Subtotal:</Typography>
            <Typography className="font-medium"> {`Rs. ${new Intl.NumberFormat("en-NP").format(order.itemsPrice)}`}</Typography>
          </div>
          <div className="flex justify-between items-center ">
            <Typography className="text-slate-400">Shipping fee:</Typography>
            <Typography className="font-medium">{`Rs. ${new Intl.NumberFormat("en-NP").format(order.shippingPrice)}`}</Typography>
          </div>
          <div className="flex justify-between items-center ">
            <Typography className="text-slate-400">VAT:</Typography>
            <Typography className="font-medium">{`Rs. ${new Intl.NumberFormat("en-NP").format(order.taxPrice)}`}</Typography>
          </div>

          <Divider orientation="horizontal" sx={{ borderStyle: "dashed" }} />

          <div className="flex justify-between items-center ">
            <Typography className="font-medium">Total:</Typography>
            <Typography className="font-medium">{`Rs. ${new Intl.NumberFormat("en-NP").format(order.totalPrice)}`}</Typography>
          </div>
          <Typography className="text-sm text-medium">
            {" "}
            Paid by Khalti{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Details;
