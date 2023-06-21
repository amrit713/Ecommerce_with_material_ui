import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, TextField } from "@mui/material";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { totalPriceSelector } from "../../../store/slice/cartSlice";
import TotalPrice from "../checkout/TotalPrice";
import Link from "next/link";

import Khalti from "./Khalti";
import { payment } from "./KhaltiConfig";
import { postOrder } from "../../../store/action/orderAction";
import toast from "react-hot-toast";
import { useRouter } from "next/router";


function Payment() {
  const totalPrice = useTypedSelector(totalPriceSelector);
  const { shippingAddress } = useTypedSelector((state) => state.order);
  const { cartItems } = useTypedSelector((state) => state.cart);
  const dispatch = useTypedDispatch();
  const router = useRouter()

  const orderItems = cartItems?.map((item: any) => {
    let orderItem = {
      name: item.product.name,
      quantity: item.qty,
      image: item.product.image,
      price: item.product.price,
      product: item.product.id,
    };

    return orderItem;
  });

  const order = {
    shippingInfo: shippingAddress,
    orderItems: orderItems,
    itemsPrice: totalPrice,
    taxPrice: (totalPrice * 13) / 100,
    shippingPrice: totalPrice >= 10000 ? 0 : 200,
    totalPrice: (totalPrice * 13) / 100 - (totalPrice * 10) / 100 + totalPrice,
    // paymentType: "Khalti Wallet",
    paymentInfo: {
      id: payment?.idx,
      status: "succeed",
    },
  };

  const orderHandler = () => {
    dispatch(postOrder(order));
    console.log(order);
    toast.success("order successfully Placed")
    router.push("/orders")

  };
  return (
    <div className="lg:h-[59.9vh]  flex flex-col-reverse md:flex-row md:space-x-8 md:space-y-0">
      <div className="md:w-[75%] ">
        <div className=" space-y-6 p-4 bg-white rounded-sm box_shadow">
          {/* <Accordion
            defaultExpanded
            TransitionProps={{ unmountOnExit: true }}
            className="bg-transparent border-solid border border-gray-200  shadow-none"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="font-semibold text-slate-700">
                Pay With PayPal
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
             
              
            </AccordionDetails>
          </Accordion> */}

          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            className="bg-transparent border-solid border border-gray-200  shadow-none"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="font-semibold text-slate-700">
                Cash On Delivery
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex items-center space-x-2">
                <Radio />
                <Typography variant="subtitle1"> Cash On Delivery</Typography>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            className="bg-transparent border-solid border border-gray-200  shadow-none"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="font-semibold text-slate-700">
                Pay with Khalti
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Khalti />
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-6 ">
          <Link href="/checkout">
            <Button variant="outlined" className="capitalize font-semibold">
              Back To Checkout
            </Button>
          </Link>

          <Button
            variant="contained"
            className="capitalize font-semibold"
            onClick={orderHandler}
          >
            {" "}
            Order
          </Button>
        </div>
      </div>

      <div className=" md:w-[25%] max-h-[27vh] border-solid border-2 shadow-sm border-gray-100 rounded-md bg-white p-4  mb-8">
        <TotalPrice />
      </div>
    </div>
  );
}

export default Payment;
