"use client";

import type { NextPage } from "next";
import Checkout from "../src/components/checkout/Checkout";
import withAuth from "../src/protectedRoute/withAuth";


const checkoutPage: NextPage = () => {
  return (
   
      <Checkout />
   
  );
};
export default withAuth(checkoutPage);
