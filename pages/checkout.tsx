"use client";

import type { NextPage } from "next";
import Checkout from "../src/components/checkout/Checkout";
import withAuth from "../src/protectedRoute/withAuth";

import Layout from "../src/layout/Layout";

const checkoutPage: NextPage = () => {
  return (
    <Layout>
      <Checkout />
    </Layout>
  );
};
export default withAuth(checkoutPage);
