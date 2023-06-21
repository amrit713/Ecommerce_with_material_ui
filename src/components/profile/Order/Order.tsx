import { IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTypedDispatch } from "../../../../store/store";
import { getSingleOrder } from "../../../../store/action/orderAction";


function Order(props: any) {

  const dispatch = useTypedDispatch();
  const router = useRouter();

  
  const orderHandler = () =>{
    router.push(`/orders/${props.order.id}`)
    dispatch(getSingleOrder(props.order.id));
  }
  return (
    <div className="grid grid-cols-2 gap-1  md:grid-cols-5  items-center justify-items-center bg-white px-4 py-1 rounded-md box_shadow cursor-pointer  ">
      <Typography className="font-medium text-slate-900 text-sm ">
        {props.order.id}
      </Typography>
      <Typography
        className={`capitalize bg-gray-200 px-5 py-1 rounded-full text-sm ${
          props.order.status === "delivered" && "bg-green-200 text-green-700"
        } ${props.order.status === "cancel" && "bg-red-200 text-red-700"}`}
      >
        {props.order.status}
      </Typography>
      <Typography className="">
        {moment(props.order.date).format("MMMM Do YYYY")}
        {/* {new Intl.DateTimeFormat('en-Us').format(props.order.date)} */}
      
      </Typography>
      <Typography className="">{props.order.totalPrice}</Typography>

      
        <IconButton className="hidden sm:flex" onClick = {orderHandler}>
          <ArrowForwardIcon className="text-slate-600" />
        </IconButton>
     
    </div>
  );
}

export default Order;
